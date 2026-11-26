import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Pause, Play } from 'lucide-react';
import Container from '../../../components/common/Container';
import AppDownloadButtons from '../../../components/common/AppDownloadButtons';
import Badge from '../../../components/common/Badge';
import { useTheme } from '../../../context/ThemeContext';
import { HERO_SLIDES, HERO_SLIDE_DURATION } from '../../../data/heroSlides';

/** How long to wait for a video to become playable before falling back to the poster. */
const VIDEO_LOAD_TIMEOUT = 3500;

/** Inline so it beats the global `img, video { height: auto; max-width: 100% }` reset. */
const FILL_STYLE = { width: '100%', height: '100%', maxWidth: 'none' };

/**
 * Background media for one slide.
 * Plays the video once (holding its last frame if it is shorter). If there is no playable
 * video (missing file, slow network, reduced motion), it shows the poster with a
 * slow zoom. Either way it calls onDone after exactly HERO_SLIDE_DURATION.
 * Progress (0–1) is reported through onProgress on every frame.
 */
function HeroMedia({ video, poster, alt, paused, reduceMotion, onProgress, onDone }) {
  const [useVideo, setUseVideo] = useState(Boolean(video) && !reduceMotion);
  const videoRef = useRef(null);
  const elapsedRef = useRef(0);
  const doneRef = useRef(false);

  // Keep the latest callbacks without restarting the effects below.
  const progressCb = useRef(onProgress);
  const doneCb = useRef(onDone);
  progressCb.current = onProgress;
  doneCb.current = onDone;

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    progressCb.current(1);
    doneCb.current();
  }, []);

  // Fall back to the poster if the video can't start in time.
  useEffect(() => {
    if (!useVideo) return undefined;
    const timer = setTimeout(() => {
      const v = videoRef.current;
      if (!v || v.readyState < 3) setUseVideo(false);
    }, VIDEO_LOAD_TIMEOUT);
    return () => clearTimeout(timer);
  }, [useVideo]);

  // Play or pause the video.
  useEffect(() => {
    const v = videoRef.current;
    if (!useVideo || !v) return;
    if (paused) {
      v.pause();
    } else {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => setUseVideo(false));
    }
  }, [paused, useVideo]);

  // Every slide lasts exactly HERO_SLIDE_DURATION, photo or video (a longer video is cut
  // off, a shorter one holds its last frame). Paused time doesn't count.
  useEffect(() => {
    if (paused) return undefined;
    const start = performance.now();
    const timer = setTimeout(finish, Math.max(HERO_SLIDE_DURATION - elapsedRef.current, 0));
    return () => {
      clearTimeout(timer);
      elapsedRef.current += performance.now() - start;
    };
  }, [paused, finish]);

  // Progress bar drawing only (doesn't control timing).
  useEffect(() => {
    if (paused) return undefined;
    let raf;
    const start = performance.now() - elapsedRef.current;
    const tick = (now) => {
      progressCb.current(Math.min((now - start) / HERO_SLIDE_DURATION, 1));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  if (useVideo) {
    return (
      <video
        ref={videoRef}
        className="absolute inset-0 object-cover"
        style={FILL_STYLE}
        src={video}
        poster={poster}
        muted
        playsInline
        preload="auto"
        aria-label={alt}
        onError={() => setUseVideo(false)}
      />
    );
  }

  return (
    <motion.img
      src={poster}
      alt={alt}
      className="absolute inset-0 object-cover"
        style={FILL_STYLE}
      initial={{ scale: 1 }}
      animate={{ scale: reduceMotion ? 1 : 1.08 }}
      transition={{ duration: HERO_SLIDE_DURATION / 1000 + 1, ease: 'linear' }}
    />
  );
}

export default function Hero() {
  const { isDark } = useTheme();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  // 'auto' follows the visitor's motion preference; 'playing'/'paused' are explicit choices.
  const [playState, setPlayState] = useState('auto');
  const [tabHidden, setTabHidden] = useState(false);
  const barRefs = useRef([]);

  const slide = HERO_SLIDES[index];
  const theme = isDark ? 'dark' : 'light';
  const media = slide.media[theme];
  // With reduced motion the carousel starts paused until the visitor presses play.
  const paused = tabHidden || playState === 'paused' || (playState === 'auto' && Boolean(reduceMotion));

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Reset all progress bars when the slide changes.
  useEffect(() => {
    barRefs.current.forEach((el) => {
      if (el) el.style.transform = 'scaleX(0)';
    });
  }, [index, theme]);

  const goTo = useCallback((i) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleProgress = useCallback(
    (p) => {
      const el = barRefs.current[index];
      if (el) el.style.transform = `scaleX(${p})`;
    },
    [index],
  );

  // Only advance if the finished slide is still the current one. A slide that is
  // fading out after a manual change keeps its old props and must not advance again.
  const handleDone = useCallback((doneIndex) => {
    setIndex((cur) => (cur === doneIndex ? (cur + 1) % HERO_SLIDES.length : cur));
  }, []);

  // Preload the next slide's poster so the crossfade doesn't flash.
  useEffect(() => {
    const next = HERO_SLIDES[(index + 1) % HERO_SLIDES.length].media[theme];
    const img = new Image();
    img.src = next.poster;
  }, [index, theme]);

  const togglePause = () => setPlayState(paused ? 'playing' : 'paused');

  /**
   * The role card for the current slide. `compact` is the smaller version that
   * sits over the photo on phones and tablets, so it's visible straight away.
   */
  const renderRoleCard = (compact) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`rounded-2xl backdrop-blur-md bg-white/90 dark:bg-[#111827]/85 border border-[#EDE9FE] dark:border-slate-800 shadow-lg ${
          compact ? 'p-4' : 'p-5 sm:p-6'
        }`}
      >
        <p className={`pappa-eyebrow text-[#4F46E5] dark:text-indigo-300 ${compact ? 'mb-1.5' : 'mb-3'}`}>{slide.label}</p>
        <h2
          className={`text-[#0F172A] dark:text-white font-bold leading-[1.35] ${
            compact ? 'text-base mb-3' : 'text-lg md:text-xl lg:text-[22px] mb-5'
          }`}
        >
          {slide.title}
        </h2>
        <ul className={compact ? 'space-y-2' : 'space-y-3'}>
          {slide.points.map((point) => (
            <li
              key={point}
              className={`flex items-start text-[#475569] dark:text-slate-300 ${
                compact ? 'gap-2.5 text-[13px] leading-[1.45]' : 'gap-3 text-sm sm:text-[15px] leading-[1.55]'
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex shrink-0 items-center justify-center rounded-lg bg-[#F5F3FF] dark:bg-indigo-950/60 border border-[#EDE9FE] dark:border-indigo-900/50 text-[#4F46E5] dark:text-indigo-400 ${
                  compact ? 'h-5 w-5' : 'h-6 w-6'
                }`}
              >
                <Check className={compact ? 'h-3 w-3' : 'h-3.5 w-3.5'} strokeWidth={3} />
              </span>
              <span className={compact ? '' : 'pt-0.5'}>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label="Pappa.ai for every role"
      className="pappa-hero-under-header relative isolate w-full overflow-hidden font-sans bg-[#F8F7FF] dark:bg-[#0B0F19] lg:min-h-[max(720px,100svh)] transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background media: top block on mobile, full-bleed on desktop */}
      <div className="relative h-[60svh] min-h-[480px] max-md:mx-4 max-md:h-[62svh] max-md:min-h-[460px] max-md:rounded-2xl lg:absolute lg:inset-0 lg:h-auto lg:min-h-0 overflow-hidden">
        {/* Own stacking context, so the slide z-index stays below the scrims. */}
        <div className="absolute inset-0 isolate">
          {/* No initial={false}: the first slide animates in on page load, like the others. */}
          <AnimatePresence>
            <motion.div
              key={`${slide.id}-${theme}`}
              className="absolute inset-0"
              // The new slide fades in on top while the old one stays fully opaque
              // underneath, so the page background never flashes through mid-fade.
              initial={{ opacity: 0, zIndex: 1 }}
              animate={{ opacity: 1, zIndex: 1 }}
              exit={{
                opacity: 0,
                zIndex: 0,
                transition: { opacity: { delay: reduceMotion ? 0 : 0.9, duration: 0 } },
              }}
              transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeInOut' }}
            >
              <HeroMedia
                video={media.video}
                poster={media.poster}
                alt={slide.alt}
                paused={paused}
                reduceMotion={reduceMotion}
                onProgress={handleProgress}
                onDone={() => handleDone(index)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrims.
            Light theme: a calm solid panel behind the text column only, so the copy reads
            clearly without washing out the rest of the photo (the navbar has its own
            frosted background). Dark theme keeps the softer full fades. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 hidden dark:block bg-gradient-to-b from-[#0B0F19]/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden lg:block dark:lg:hidden w-[68%] bg-[linear-gradient(90deg,#F8F7FF_0%,#F8F7FF_36%,rgba(248,247,255,0.82)_48%,rgba(248,247,255,0)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden dark:lg:block w-[62%] bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/85 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden lg:block h-28 bg-gradient-to-t from-[#F8F7FF]/40 to-transparent dark:h-40 dark:from-[#0B0F19]/80"
        />
        {/* Role card over the photo on phones and tablets */}
        <div
          className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[380px] lg:hidden"
          aria-live={paused ? 'polite' : 'off'}
        >
          {renderRoleCard(true)}
        </div>
      </div>

      <Container className="relative z-10 lg:min-h-[max(720px,100svh)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 pt-2 max-md:pt-6 pb-10 lg:pt-28 lg:pb-28">
        {/* Left: constant message */}
        <div className="max-w-xl">
          <Badge variant="brand" className="mb-5 sm:mb-6">One Platform for Your School</Badge>

          <h1 className="text-[#0F172A] dark:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.15] mb-5 sm:mb-6 [text-wrap:balance]">
            A connected school experience for{' '}
            <span className="text-[#4F46E5] dark:text-indigo-400">every role.</span>
          </h1>

          <p className="text-base sm:text-lg font-medium text-[#334155] dark:text-slate-300 leading-relaxed max-w-md mb-7 sm:mb-8 [text-wrap:pretty]">
            From classroom learning to safe arrival and pickup, bring your entire school community together.
          </p>

          <AppDownloadButtons align="left" className="w-auto" />
        </div>

        {/* Right: role card (desktop). Below lg it sits on the photo instead. */}
        <div className="hidden lg:block lg:w-[380px] xl:w-[400px] shrink-0" aria-live={paused ? 'polite' : 'off'}>
          {renderRoleCard(false)}
        </div>

        {/* Controls: progress dots + pause */}
        <div className="flex items-center justify-center gap-3 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2">
          <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
            {HERO_SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${s.label.toLowerCase()}`}
                  aria-current={active ? 'true' : undefined}
                  className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B0F19] ${
                    active ? 'w-8 bg-[#4F46E5]/20 dark:bg-indigo-400/25' : 'w-2.5 bg-[#0F172A]/20 hover:bg-[#0F172A]/40 dark:bg-white/35 dark:hover:bg-white/60'
                  }`}
                >
                  {active && (
                    <span
                      ref={(el) => {
                        barRefs.current[i] = el;
                      }}
                      className="absolute inset-0 origin-left rounded-full bg-[#4F46E5] dark:bg-indigo-400"
                      style={{ transform: 'scaleX(0)' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={togglePause}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#475569] hover:bg-[#0F172A]/10 dark:text-slate-300 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
        </div>
      </Container>
    </section>
  );
}

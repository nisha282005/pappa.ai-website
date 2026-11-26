import React, { useState } from 'react';
import { Mail, MessageCircle, CalendarDays, School, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../../../components/common/Container';
import Badge from '../../../components/common/Badge';
import { CONTACT_CONFIG } from '../../../data/contact';

const HIGHLIGHTS = [
  { icon: MessageCircle, title: 'Get Answers', text: 'Quick support for your queries' },
  { icon: CalendarDays, title: 'Book a Demo', text: 'See Pappa.ai in action' },
  { icon: School, title: 'Find the Right Fit', text: 'How it works for your institution' },
];

const EMPTY = { name: '', email: '', subject: '', message: '' };

const LABEL = 'block text-sm font-semibold text-[#0F172A] dark:text-white mb-1.5';
const FIELD =
  'w-full rounded-xl border border-[#E2E8F0] dark:border-slate-700 bg-white dark:bg-[#0B0F19] px-4 text-[15px] text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] dark:placeholder:text-slate-500 hover:border-[#CBD5E1] dark:hover:border-slate-600 focus:border-[#4F46E5] dark:focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-[#4F46E5]/15 dark:focus:ring-indigo-500/20 transition-colors duration-200';

function Required() {
  return (
    <span className="text-[#DC2626] dark:text-red-400" aria-hidden="true">
      {' '}*
    </span>
  );
}

/**
 * Contact page hero: intro, school illustration and highlights on the left,
 * "Send Us a Message" form on the right. On phones the form comes straight
 * after the intro.
 *
 * Required fields use the browser's built-in validation (a small native prompt),
 * so no error text is added to the layout.
 *
 * Note: there is no backend yet. Submitting shows the success state, but the
 * message is not sent anywhere.
 */
export default function ContactHero() {
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: connect to the real contact endpoint. For now this only simulates sending.
    setTimeout(() => {
      setSubmitting(false);
      setSent({ ...form });
    }, 500);
  };

  const reset = () => {
    setForm(EMPTY);
    setSent(null);
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F8F7FF] via-[#F5F3FF] to-[#EEF2FF] dark:from-[#0B0F19] dark:via-[#0B0F19] dark:to-[#111433] min-h-[100svh] flex items-center pt-[88px] pb-14 sm:pt-[104px] lg:pt-[96px] lg:pb-16 font-sans transition-colors duration-200"
    >
      {/* Soft ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 -z-10 h-[420px] w-[520px] rounded-full bg-[#C7D2FE]/50 dark:bg-indigo-600/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-20 -z-10 h-[360px] w-[420px] rounded-full bg-[#EDE9FE]/70 dark:bg-purple-700/10 blur-3xl" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-x-14 lg:gap-y-6 xl:gap-x-20">
          {/* Intro */}
          <div className="lg:col-start-1 lg:row-start-1">
            <Badge variant="brand" icon={Mail} className="mb-4">
              Contact Us
            </Badge>
            <h1
              id="contact-heading"
              className="text-[32px] sm:text-[38px] lg:text-[42px] font-extrabold tracking-tight leading-[1.12] text-[#0F172A] dark:text-white [text-wrap:balance]"
            >
              Let&rsquo;s Talk About Your School&rsquo;s Needs
            </h1>
            <p className="mt-3 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#475569] dark:text-slate-300">
              Have a question, need a demo, or want to learn more about Pappa.ai? We&rsquo;re here to help.
            </p>
          </div>

          {/* Form card */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-start">
            <div className="rounded-3xl border border-[#EDE9FE] dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-7 shadow-[0_30px_70px_-30px_rgba(79,70,229,0.35)] dark:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]">
              {sent ? (
                <div className="py-10 text-center" role="status">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFDF5] dark:bg-emerald-950/60 text-[#047857] dark:text-emerald-300">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-[#0F172A] dark:text-white">Thanks, {sent.name.trim().split(' ')[0]}!</h2>
                  <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-[#475569] dark:text-slate-300">
                    We&rsquo;ve received your message about &ldquo;{sent.subject}&rdquo; and will reply to{' '}
                    <span className="font-semibold text-[#0F172A] dark:text-white">{sent.email}</span> soon.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-[#4F46E5] dark:text-indigo-300 hover:bg-[#F5F3FF] dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white">Send Us a Message</h2>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#475569] dark:text-slate-400">
                    Fill in the details below and our team will get back to you soon.
                  </p>

                  <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={LABEL}>
                          Name
                          <Required />
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Enter your name"
                          required
                          value={form.name}
                          onChange={onChange}
                          className={`${FIELD} h-11`}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={LABEL}>
                          Email
                          <Required />
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Enter your email"
                          required
                          value={form.email}
                          onChange={onChange}
                          className={`${FIELD} h-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className={LABEL}>
                        Subject
                        <Required />
                      </label>
                      <div className="relative">
                        <select
                          id="contact-subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={onChange}
                          className={`${FIELD} h-11 appearance-none pr-11 cursor-pointer ${
                            form.subject ? '' : 'text-[#94A3B8]! dark:text-slate-500!'
                          }`}
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          {CONTACT_CONFIG.inquiryTypes.map((t) => (
                            <option key={t} value={t} className="text-[#0F172A] dark:text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#475569] dark:text-slate-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={LABEL}>
                        Message
                        <Required />
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        placeholder="Type your message here"
                        required
                        value={form.message}
                        onChange={onChange}
                        className={`${FIELD} resize-y py-2.5 min-h-[96px]`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] text-base font-semibold text-white shadow-[0_12px_24px_-10px_rgba(79,70,229,0.7)] hover:bg-[#4338CA] active:bg-[#3730A3] disabled:opacity-70 disabled:cursor-wait transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4F46E5]/30"
                    >
                      {submitting ? 'Sending…' : 'Send Message'}
                      {!submitting && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Illustration + highlights. On desktop this block sits at the bottom of its row,
              so it ends level with the bottom of the form card. */}
          <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
            {/* Light: soft edges that blend into the page.
                Visibility is toggled on wrappers, because the global img reset sets display:block. */}
            <div className="dark:hidden">
            <img
              src="/images/contact/contact-school.webp"
              alt="Illustration of a school building with trees"
              loading="lazy"
              className="block w-full max-w-[520px] select-none [mask-image:linear-gradient(to_bottom,transparent_0%,#000_24%,#000_76%,transparent_100%),linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
              // Same proportions as the dark card so both themes line up with the form.
              style={{ height: 'auto', aspectRatio: '700 / 208', objectFit: 'cover' }}
            />
            </div>
            {/* Dark: twilight school illustration softly blended into the dark background */}
            <div className="hidden dark:block">
            <img
              src="/images/contact/contact-school-dark.jpg"
              alt="Twilight illustration of a school building with warm lit windows and trees"
              loading="lazy"
              className="block w-full max-w-[520px] select-none [mask-image:linear-gradient(to_bottom,transparent_0%,#000_24%,#000_76%,transparent_100%),linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
              style={{ height: 'auto', aspectRatio: '700 / 208', objectFit: 'cover', objectPosition: 'center 58%' }}
            />
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-0">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className={`flex items-start gap-3 sm:px-4 ${i === 0 ? 'sm:pl-0' : 'sm:border-l sm:border-[#DDD6FE] dark:sm:border-slate-700'}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-tight text-[#0F172A] dark:text-white">{title}</span>
                    <span className="mt-1 block text-[13px] leading-snug text-[#475569] dark:text-slate-400">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

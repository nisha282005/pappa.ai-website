/**
 * Home hero carousel slides.
 *
 * Each slide has its own media for light and dark themes.
 *  - video:  short clip (about 4s) that plays once. The slide moves on when it ends.
 *  - poster: still image shown while the video loads, when the video file is
 *            missing, and for visitors who prefer reduced motion.
 *
 * If a video file isn't there yet, the slide shows the poster with a slow zoom
 * and moves on after `duration` ms. To add a video, drop the file at the path
 * below; no code change is needed.
 *
 * The posters below are TEMPORARY stand-ins from /images/hero. Replace them
 * with the first frame of each video (exported as .jpg) once the clips are ready.
 */
export const HERO_SLIDE_DURATION = 5000;

export const HERO_SLIDES = [
  {
    id: 'student',
    label: 'Student Experience',
    title: 'Learn, engage and grow.',
    points: [
      'Lessons, study materials and assignments',
      'Weekly and monthly tests',
      'Certificates when you finish a program',
    ],
    alt: 'A student walking through an archway towards the school',
    media: {
      light: { video: '/videos/hero/student-light.mp4', poster: '/images/hero/hero-teacher-student-learning.jpg' },
      dark: { video: '/videos/hero/student-dark.mp4', poster: '/images/hero/hero-teacher-student-learning.jpg' },
    },
  },
  {
    id: 'teacher',
    label: 'Teacher Experience',
    title: 'Teach more. Chase less.',
    points: [
      'Your schedule across every branch',
      'Share materials, set assignments and tests',
      'Request leave, with substitute cover arranged',
    ],
    alt: 'A teacher walking through an archway towards the school',
    media: {
      light: { video: '/videos/hero/teacher-light.mp4', poster: '/images/hero/hero-classroom-teacher-tablet.jpg' },
      dark: { video: '/videos/hero/teacher-dark.mp4', poster: '/images/hero/hero-classroom-teacher-tablet.jpg' },
    },
  },
  {
    id: 'parent',
    label: 'Parent Experience',
    title: 'Every child, safely home.',
    points: [
      'Know when your child arrives and leaves',
      'Alerts for late or unauthorized pickup',
      'Pay fees online, at the desk or later',
    ],
    alt: 'A parent walking their child through an archway towards the school',
    media: {
      light: { video: '/videos/hero/parent-light.mp4', poster: '/images/hero/hero-school-pickup-safety.jpg' },
      dark: { video: '/videos/hero/parent-dark.mp4', poster: '/images/hero/hero-school-pickup-safety.jpg' },
    },
  },
  {
    id: 'admin',
    label: 'Admin Experience',
    title: 'Every branch, one view.',
    points: [
      'Branches, calendars and timetables',
      'Enrollments, fees and registrations',
      'Announcements to one class or everyone',
    ],
    alt: 'An administrator walking through an archway towards the school',
    media: {
      light: { video: '/videos/hero/admin-light.mp4', poster: '/images/hero/characters/school-backdrop.jpg' },
      dark: { video: '/videos/hero/admin-dark.mp4', poster: '/images/hero/characters/school-backdrop.jpg' },
    },
  },
];

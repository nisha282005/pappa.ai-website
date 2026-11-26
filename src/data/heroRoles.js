/**
 * Hero Section Role-Based Interactive Content
 * Matches the reference screenshot and prompt verbatim:
 * - Student
 * - Teacher
 * - Parent
 * - Administrator
 */
export const HERO_ROLES = [
  {
    id: 'student',
    label: 'For Students',
    characterLabel: 'Student',
    iconName: 'GraduationCap',
    headlinePrefix: 'One platform. A better ',
    headlineAccent: 'way to learn.',
    description:
      'Access assignments, track grades, explore learning resources, and stay updated with your school.',
    accentColor: '#4F46E5',
    image: '/images/hero/characters/student.png',
    alt: 'Smiling student in uniform with backpack and notebooks',
    platform: {
      leftPercent: 27.5,
      bottomPercent: 12,
      scale: 1.15,
    },
  },
  {
    id: 'teacher',
    label: 'For Teachers',
    characterLabel: 'Teacher',
    iconName: 'BookOpen',
    headlinePrefix: 'One platform. Teaching ',
    headlineAccent: 'made simpler.',
    description:
      'Manage classrooms, create assignments, track student progress, and connect with parents.',
    accentColor: '#4F46E5',
    image: '/images/hero/characters/teacher.png',
    alt: 'Teacher holding a digital tablet in saree',
    platform: {
      leftPercent: 49.5,
      bottomPercent: 19,
      scale: 0.96,
    },
  },
  {
    id: 'parent',
    label: 'For Parents',
    characterLabel: 'Parent',
    iconName: 'Home',
    headlinePrefix: 'One platform. Stay connected to ',
    headlineAccent: 'every milestone.',
    description:
      'Track attendance, monitor academic progress, receive announcements, and stay connected with teachers.',
    accentColor: '#4F46E5',
    image: '/images/hero/characters/parent.png',
    alt: 'Parent in peach patterned attire with white dupatta',
    platform: {
      leftPercent: 67.5,
      bottomPercent: 24,
      scale: 0.88,
    },
  },
  {
    id: 'administrator',
    label: 'For Administrators',
    characterLabel: 'Administrator',
    iconName: 'Building2',
    headlinePrefix: 'One platform. Your entire institution, ',
    headlineAccent: 'in control.',
    description:
      'Manage students, staff, academics, fees, and daily school operations in one place.',
    accentColor: '#4F46E5',
    image: '/images/hero/characters/administrator.png',
    alt: 'Administrator in formal business suit and tie',
    platform: {
      leftPercent: 84.5,
      bottomPercent: 28,
      scale: 0.82,
    },
  },
];

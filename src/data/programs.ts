import {
  Briefcase,
  Target,
  FileText,
  Laptop,
  Users,
  TrendingUp,
  Handshake,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    icon: Briefcase,
    title: 'Workforce Readiness Training',
    description: 'Preparing participants to understand workplace expectations, professionalism, communication, time management, teamwork, and employer expectations.',
    image: '/images/D1175822-1D9A-4141-BD8F-25EC4CA043A2.png',
  },
  {
    icon: Target,
    title: 'Career Coaching',
    description: 'Individual and group guidance designed to help young adults identify career interests, establish employment goals, and develop realistic career plans.',
    image: '/images/cwfr_gold_polo_retouched.png',
  },
  {
    icon: FileText,
    title: 'Resume & Interview Preparation',
    description: 'Hands-on assistance with resumes, job applications, interviewing techniques, professional presentation, and job-search strategies.',
    image: '/images/IMG_8858.png',
  },
  {
    icon: Laptop,
    title: 'Digital & Financial Literacy',
    description: 'Helping participants develop essential digital skills and basic financial knowledge needed for today\'s workforce and independent adulthood.',
    image: '/images/cwfr_gold_polo_retouched.png',
  },
  {
    icon: TrendingUp,
    title: 'Leadership Development',
    description: 'Building confidence, communication, decision-making, accountability, and leadership skills.',
    image: '/images/FD6D09A1-7E7F-446F-9066-B54253A0FE9E.png',
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Connecting young adults with positive mentors and professionals who can provide encouragement, career guidance, and real-world insight.',
    image: '/images/356110CE-415A-47A5-AA6F-1B1889D4145A.png',
  },
  {
    icon: Handshake,
    title: 'Internship & Job Placement Support',
    description: 'Connecting qualified participants with employment opportunities, internships, apprenticeships, and participating employers whenever available.',
    image: '/images/D1175822-1D9A-4141-BD8F-25EC4CA043A2.png',
  },
  {
    icon: Building2,
    title: 'Employer & Community Partnerships',
    description: 'Developing partnerships with businesses, community organizations, educational institutions, and workforce-development partners to expand opportunities for program participants.',
    image: '/images/FD6D09A1-7E7F-446F-9066-B54253A0FE9E.png',
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  { number: '01', title: 'Apply', description: 'Young adults submit an application to participate.' },
  { number: '02', title: 'Assess', description: 'Participants\' career interests, goals, skills, and workforce needs are identified.' },
  { number: '03', title: 'Prepare', description: 'Participants receive workforce-readiness training, career coaching, resume assistance, interview preparation, and professional-development support.' },
  { number: '04', title: 'Connect', description: 'Participants are connected with mentors, employers, internships, job opportunities, and community resources when available.' },
  { number: '05', title: 'Succeed', description: 'The Foundation continues encouraging participants as they transition toward employment and long-term career success.' },
];

export interface InvolveOption {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const INVOLVEMENT: InvolveOption[] = [
  { icon: Users, title: 'Volunteer', description: 'Share your time and skills to support our programs and participants.' },
  { icon: Target, title: 'Mentor', description: 'Provide guidance, encouragement, and real-world career insight to a young adult.' },
  { icon: Building2, title: 'Employer Partner', description: 'Connect qualified participants with employment and internship opportunities.' },
  { icon: Handshake, title: 'Community Partner', description: 'Collaborate with us to expand opportunities across South Florida.' },
  { icon: TrendingUp, title: 'Corporate Sponsor', description: 'Invest in workforce readiness and strengthen our community together.' },
  { icon: Briefcase, title: 'Supporter', description: 'Help us spread the word and advocate for young adults in our community.' },
];

export const DONATE_AREAS = [
  'Workforce-readiness training',
  'Career-development resources',
  'Resume and interview preparation',
  'Mentorship initiatives',
  'Digital literacy',
  'Financial literacy',
  'Program materials',
  'Participant support',
  'Internship and employment initiatives',
  'Community outreach',
];

export const CONTACT_REASONS = [
  'Program Participation',
  'Volunteering',
  'Mentoring',
  'Employer Partnership',
  'Sponsorship',
  'Donation',
  'Community Partnership',
  'General Information',
];

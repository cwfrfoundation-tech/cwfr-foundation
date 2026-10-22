export const IMAGES = {
  // Actual CWFR leadership headshots plus licensed illustrative office/nature photos
  hero: '/images/FD6D09A1-7E7F-446F-9066-B54253A0FE9E.png',
 mission: 'https://images.pexels.com/photos/32973007/pexels-photo-32973007.jpeg?auto=compress&cs=tinysrgb&w=1200',
  vision: 'https://images.pexels.com/photos/4773951/pexels-photo-4773951.jpeg?auto=compress&cs=tinysrgb&w=1200',
  about: 'https://images.pexels.com/photos/6446245/pexels-photo-6446245.jpeg?auto=compress&cs=tinysrgb&w=1200',
  founder: '/images/founder-img.jpeg',
  executiveDirector: '/images/Executive-Director.jpeg',
  president: '/images/President.jpeg',
  cfo: '/images/Chief-Financial-Officer.jpeg',
  secretary: '/images/Secretary.jpeg',
  story: 'https://images.pexels.com/photos/34147402/pexels-photo-34147402.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // Dedicated unique page heroes & features (no repeats)
  aboutHero: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1600',
  missionHero: 'https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1600',
  missionPageMission: 'https://images.pexels.com/photos/35302651/pexels-photo-35302651.jpeg?auto=compress&cs=tinysrgb&w=1200',
  missionPageVision: 'https://images.pexels.com/photos/9943258/pexels-photo-9943258.jpeg?auto=compress&cs=tinysrgb&w=1200',
  programsHero: 'https://images.pexels.com/photos/8761350/pexels-photo-8761350.jpeg?auto=compress&cs=tinysrgb&w=1600',
  donateHero: 'https://images.pexels.com/photos/6147022/pexels-photo-6147022.jpeg?auto=compress&cs=tinysrgb&w=1600',
  donateFeature: 'https://images.pexels.com/photos/31968759/pexels-photo-31968759.jpeg?auto=compress&cs=tinysrgb&w=1200',
  contactHero: 'https://images.pexels.com/photos/8761298/pexels-photo-8761298.jpeg?auto=compress&cs=tinysrgb&w=1600',
  legalHero: 'https://images.pexels.com/photos/9301860/pexels-photo-9301860.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const ORG = {
  name: 'Charles Workforce Readiness Foundation',
  shortName: 'Charles Workforce Readiness Foundation',
  tagline: 'Workforce Ready.',
  founder: 'Charles C. Vallon',
  founderTitle: 'Founder / Chairman',
  executiveDirector: 'Tiffinay Cage',
  executiveDirectorTitle: 'Executive Director / Vice Chairman',
  location: '345 NW 101st Street, Miami, FL · Serving Miami-Dade, Broward & Monroe Counties, Florida',
  audience: 'Young Adults Ages 17-24',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Mission & Vision', path: '/mission-vision' },
  { label: 'Programs', path: '/programs' },
  { label: 'Donate', path: '/donate' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
];

export interface BoardMember {
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string;
}

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Dr. Brian Crawford',
    role: 'President / Director',
    organization: 'Charles Workforce Readiness Foundation',
    image: IMAGES.president,
    bio: 'Dr. Brian Crawford serves as President and Director, overseeing day-to-day operations with a commitment to organizational excellence. He works closely with the team to implement strategic initiatives, strengthen the organization’s impact, and advance its mission and long-term goals.',
  },
  {
    name: 'Beautisheka Jones',
    role: 'Chief Financial Officer (CFO) / Director',
    organization: 'Charles Workforce Readiness Foundation',
    image: IMAGES.cfo,
    bio: 'Beautisheka Jones serves as Chief Financial Officer and Director of the Charles Workforce Readiness Foundation, providing financial leadership and oversight of the Foundation’s fiscal operations. She supports budgeting, financial reporting, internal financial controls, and responsible stewardship of organizational resources while working with the Board to promote transparency, accountability, and long-term financial sustainability.',
  },
  {
    name: 'Shandett Cage',
    role: 'Secretary / Director',
    organization: 'Charles Workforce Readiness Foundation',
    image: IMAGES.secretary,
    bio: 'Shandett Cage serves as Secretary and Director of the Charles Workforce Readiness Foundation, supporting effective governance and the overall administration of the Board. She is responsible for maintaining accurate organizational records, documenting board meetings and official actions, and supporting correspondence and compliance matters. As a Director, she also contributes to strategic decision-making and helps advance the Foundation’s mission and long-term goals.',
  },
];

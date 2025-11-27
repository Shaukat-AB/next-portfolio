import { TLink } from '@/types';

export const navLinks: TLink[] = [
  { title: 'Home', href: '/' },
  { title: 'Realtime Chat-App', href: '/projects/realtime-chat-app' },
  { title: 'E-Commerce MERN Stack', href: '/projects/ecommerce-mern' },
  { title: 'Blog NextJS', href: '/projects/blog-nextjs' },
  { title: 'Movieshowcase ReactJS', href: '/projects/movieshowcase-reactjs' },
];

export const socialLinks: TLink[] = [
  { title: 'Github', href: process.env.NEXT_PUBLIC_GITHUB || '' },
  { title: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN || '' },
];

export const githubLink = socialLinks[0].href;
export const linkedinLink = socialLinks[1].href;

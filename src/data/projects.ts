import { createGithubLink, createReadMeLink } from '@/lib/util';
import { TProject } from '@/types';

export const projects: TProject[] = [
  {
    title: 'Realtime Chat-App',
    image: '/images/chat-app.jpg',
    shortDesc:
      'A seamless real-time chat application built with the MERN stack, featuring modern UI/UX and secure authentication',
    github: createGithubLink('Realtime-Chat-App'),
    readme: createReadMeLink('Realtime-Chat-App'),
  },
  {
    title: 'E-Commerce MERN Stack',
    image: '/images/eshophue.jpg',
    shortDesc:
      'An e-commerce webapp that allows people to buy products, can process orders, accept payments through stripe, and manage shipping',
    github: createGithubLink('eshophue'),
    readme: createReadMeLink('eshophue'),
  },
  {
    title: 'Blog NextJS',
    image: '/images/next-blog.jpg',
    shortDesc:
      'The project serves as a comprehensive blog platform that allows user to create, read, update, and delete blog posts',
    github: createGithubLink('next-blog'),
    readme: createReadMeLink('next-blog'),
    demo: 'https://next-blog-livid-five.vercel.app/',
  },
  {
    title: 'Movieshowcase ReactJS',
    image: '/images/movie-showcase-ten.vercel.app_.jpg',
    shortDesc:
      'Web application that showcases the list of movies from the TMDB API using Axios. It allows users to search for movies by title, view movie details such as title, poster, overview, rating, and release date',
    github: createGithubLink('movie-showcase'),
    readme: createReadMeLink('movie-showcase'),
    demo: 'https://movie-showcase-ten.vercel.app/',
  },
  {
    title: 'Espyvid',
    image: '/images/espyvid.vercel.app_.jpg',
    shortDesc:
      'The web app built using React.js with integration of YouTube API to show videos and provide an experience similar to YouTube',
    github: createGithubLink('espyvid'),
    readme: createReadMeLink('espyvid'),
    demo: 'https://espyvid.vercel.app/',
  },
  {
    title: 'Shopping cart',
    image: '/images/shopping-cart-seven-weld.vercel.app_.jpg',
    shortDesc:
      'It showcases how to manage and manipulate state using the Context API and useReducer to handle cart functionality',
    github: createGithubLink('shopping-cart'),
    readme: createReadMeLink('shopping-cart'),
    demo: 'https://shopping-cart-seven-weld.vercel.app/',
  },
];

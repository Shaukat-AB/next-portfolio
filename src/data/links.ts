import { TLink } from "@/types";

export const navLinks: TLink[] = [
    { title: "Home", href: "/" },
    { title: "ECommerce MERN", href: "/projects/ecommerce-mern" },
    { title: "Blog NextJS", href: "/projects/blog-nextjs" },
    { title: "Movieshowcase ReactJS", href: "/projects/movieshowcase-reactjs" },
];

export const socialLinks: TLink[] = [
    { title: "Github", href: process.env.NEXT_PUBLIC_GITHUB || "" },
    { title: "LinkedIn", href: process.env.NEXT_PUBLIC_GITHUB || "" },
];

import { createGithubLink, createReadMeLink } from "@/lib/util";
import { TProject } from "@/types";

export const projects: TProject[] = [
    {
        title: "ECommerce MERN",
        image: "/images/eshophue.jpg",
        github: createGithubLink("eshophue"),
        readme: createReadMeLink("eshophue"),
    },
    {
        title: "Blog NextJS",
        image: "/images/next-blog.jpg",
        github: createGithubLink("next-blog"),
        readme: createReadMeLink("next-blog"),
        demo: "https://next-blog-livid-five.vercel.app/",
    },
    {
        title: "Movieshowcase ReactJS",
        image: "/images/movie-showcase-ten.vercel.app_.jpg",
        github: createGithubLink("movie-showcase"),
        readme: createReadMeLink("movie-showcase"),
        demo: "https://movie-showcase-ten.vercel.app/",
    },
    {
        title: "Espyvid",
        image: "/images/espyvid.vercel.app_.jpg",
        github: createGithubLink("espyvid"),
        readme: createReadMeLink("espyvid"),
        demo: "https://espyvid.vercel.app/",
    },
    {
        title: "Shopping cart",
        image: "/images/shopping-cart-seven-weld.vercel.app_.jpg",
        github: createGithubLink("shopping-cart"),
        readme: createReadMeLink("shopping-cart"),
        demo: "https://shopping-cart-seven-weld.vercel.app/",
    },
    {
        title: "Chatweb React Firebase",
        image: "",
        github: createGithubLink("chatweb"),
        readme: createReadMeLink("chatweb"),
    },
];

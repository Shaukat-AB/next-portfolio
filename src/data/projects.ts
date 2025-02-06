import { createReadMeLink } from "@/lib/util";
import { TProject } from "@/types";

export const projects: TProject[] = [
    {
        title: "ECommerce MERN",
        image: "",
        readme: createReadMeLink("eshophue"),
    },
    { title: "Blog NextJS", image: "", readme: createReadMeLink("next-blog") },
    {
        title: "Movieshowcase ReactJS",
        image: "/images/movie-showcase-ten.vercel.app_.jpg",
        readme: createReadMeLink("movie-showcase"),
    },
    {
        title: "Shopping cart",
        image: "/images/shopping-cart-seven-weld.vercel.app_.jpg",
        readme: createReadMeLink("shopping-cart"),
    },
    {
        title: "Espyvid",
        image: "/images/espyvid.vercel.app_.jpg",
        readme: createReadMeLink("espyvid"),
    },
    {
        title: "Chatweb React Firebase",
        image: "",
        readme: createReadMeLink("chatweb"),
    },
];

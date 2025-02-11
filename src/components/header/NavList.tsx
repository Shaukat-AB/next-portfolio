import NavLink from "./NavLink";
import { navLinks } from "@/data/links";

const NavList = () => {
    return (
        <ul className="bg-background dark:bg-gray-900 border-2 shadow-lg flex flex-col gap-6 max-w-xl py-5 mx-auto rounded-lg dark:border-gray-700">
            {navLinks.map((link) => (
                <li className="font-semibold" key={link.title}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default NavList;

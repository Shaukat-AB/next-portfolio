import NavLink from "./NavLink";
import { navLinks } from "@/data/links";


const NavList = () => {
    return (
        <ul className="bg-white dark:bg-gray-900 border-t-2 shadow-lg flex flex-col gap-6 max-w-xl py-5 mx-auto font-medium rounded-lg dark:border-gray-700">
            {navLinks.map((link) => (
                <li key={link.title}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default NavList;

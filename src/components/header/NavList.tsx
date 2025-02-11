import NavLink from "./NavLink";
import { navLinks } from "@/data/links";

const NavList = () => {
    return (
        <ul className="bg-background nav-border shadow-lg flex flex-col gap-6 max-w-xl py-5 mx-auto">
            {navLinks.map((link) => (
                <li className="font-semibold" key={link.title}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default NavList;

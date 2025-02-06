"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ title = "", href = "/" }) => {
    const pathname = usePathname();
    const isActive = (pathname == "/" && title == "Home") || pathname == href;

    return (
        <Link
            href={href}
            className={`block py-2 px-3 rounded-sm ${
                isActive ? "bg-blue-700 text-white" : ""
            } hover:bg-blue-700 hover:text-white`}
        >
            {title}
        </Link>
    );
};
export default NavLink;

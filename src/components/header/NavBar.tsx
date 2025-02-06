"use client";

import { NavMenu } from "@/lib/icons";
import { useState } from "react";
import NavList from "./NavList";

const NavBar = () => {
    const [open, setOpen] = useState<Boolean>(false);

    return (
        <nav className="border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button
                    type="button"
                    className="btn-icon"
                    aria-controls="navbar"
                    aria-expanded={open ? "true" : "false"}
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Open main menu</span>
                    <NavMenu className="icon-lg" />
                </button>

                <div
                    id="navbar"
                    className={`${
                        !open ? "hidden" : "absolute top-[100px] left-0 z-50"
                    } w-full px-5`}
                >
                    <NavList />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

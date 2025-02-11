"use client";

import { NavMenu } from "@/lib/icons";
import { useState } from "react";
import NavList from "./NavList";

const NavBar = () => {
    const [open, setOpen] = useState<Boolean>(false);

    return (
        <nav className="flex">
            <div className="center-container">
                <button
                    type="button"
                    className="btn-nav"
                    aria-controls="navbar"
                    aria-expanded={open ? "true" : "false"}
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Open main menu</span>
                    <NavMenu className="icon-lg" />
                </button>
            </div>

            <div
                id="navbar"
                className={`${
                    !open
                        ? "hidden"
                        : "absolute top-[100px] left-0 z-50 nav-open-animate"
                } w-full`}
            >
                <NavList />
            </div>
        </nav>
    );
};

export default NavBar;

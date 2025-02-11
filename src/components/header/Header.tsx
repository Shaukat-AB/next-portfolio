import Link from "next/link";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="max-container header-border">
            <div className="relative h-[100px] flex items-center justify-between mx-auto px-4 py-4">
                <Link href="/" className="text-xl font-semibold">
                    Shaukat
                </Link>

                <NavBar />
            </div>
        </header>
    );
};

export default Header;

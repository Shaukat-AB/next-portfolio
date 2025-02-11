import Link from "next/link";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="max-container border-b-2 rounded-b-sm border-gray-100">
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

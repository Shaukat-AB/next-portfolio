import { GithubIcon } from "@/lib/icons";
import Link from "next/link";

const GithubButton = ({ title = "View Github", className = "", href = "" }) => {
    return (
        <Link
            target="_blank"
            href={!href ? process.env.NEXT_PUBLIC_GITHUB || "/" : href}
            className={`btn-dark icon-container ${className}`}
        >
            <GithubIcon className="icon-md" />
            <span>{title}</span>
        </Link>
    );
};

export default GithubButton;

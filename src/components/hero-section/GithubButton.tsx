import { GithubIcon } from "@/lib/icons";
import Link from "next/link";

const GithubButton = ({ title = "View Github" }) => {
    return (
        <Link
            target="_blank"
            href={process.env.NEXT_PUBLIC_GITHUB || "/"}
            className="btn-dark icon-container"
        >
            <GithubIcon className="icon-md" />
            <span>{title}</span>
        </Link>
    );
};

export default GithubButton;

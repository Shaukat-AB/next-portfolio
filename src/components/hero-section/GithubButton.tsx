import { GithubIcon } from "@/lib/icons";
import Link from "next/link";

const GithubButton = ({ title = "View Github" }) => {
    return (
        <Link
            target="_blank"
            href={process.env.NEXT_PUBLIC_GITHUB || "/"}
            className="btn-dark inline-flex justify-center items-center gap-2"
        >
            <GithubIcon className="text-2xl" />
            <span>{title}</span>
        </Link>
    );
};

export default GithubButton;

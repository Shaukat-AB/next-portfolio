import Link from "next/link";

const FooterLink = ({ title = "", href = "" }) => {
    return (
        <Link href={href || "/"} className="link">
            {title}
        </Link>
    );
};

export default FooterLink;

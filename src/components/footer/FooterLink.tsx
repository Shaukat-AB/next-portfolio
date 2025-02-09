import Link from "next/link";

const FooterLink = ({ title = "", href = "" }) => {
    return (
        <Link href={href || "/"} className="footer-link">
            {title}
        </Link>
    );
};

export default FooterLink;

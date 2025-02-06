import { navLinks, socialLinks } from "@/data/links";
import FooterLink from "./FooterLink";
import FooterLinkList from "./FooterLinkList";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="min-h-[80vh] flex items-center justify-between px-4 py-4 h-[80vh] text-gray-50 text-center before:content-[hello] bg-gray-900">
            <section className="max-container flex flex-col gap-16 justify-center items-center w-full">
                <nav className="flex flex-col gap-16 md:flex-row justify-around w-full">
                    <div>
                        <h3 className="sub-title mb-4">Portfolio</h3>
                        <FooterLinkList links={navLinks} />
                    </div>
                    <div>
                        <h3 className="sub-title mb-4">Get In Touch</h3>
                        <FooterLinkList links={socialLinks} />
                    </div>
                </nav>

                <span className="text-sm">
                    © {currentYear} Developed By{" "}
                    <strong className="font-normal">
                        Shaukat - <FooterLink href="/" title={"Portfolio"} />.
                    </strong>{" "}
                    All Rights Reserved.
                </span>
            </section>
        </footer>
    );
};

export default Footer;

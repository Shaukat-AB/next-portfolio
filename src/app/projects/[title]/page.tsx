import { projects } from "@/data/projects";
import { convertToLowerCase } from "@/lib/util";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const ProjectPage = async ({
    params,
}: {
    params: Promise<{ title: string }>;
}) => {
    const title = (await params).title;
    const [link] = projects.filter(
        (project) => convertToLowerCase(project.title) == title
    );
    if (!link) return;
    const respone: Response = await fetch(link.readme);
    if (!respone.ok) {
        throw new Error("Project not found.");
    }
    const readme = await respone.text();

    return (
        <ReactMarkdown
            className="prose lg:prose-xl py-8 prose-a:no-underline"
            components={{
                a: ({ href, children }) =>
                    href && (
                        <Link href={href} className="btn-primary px-4">
                            {children}
                        </Link>
                    ),
            }}
        >
            {readme}
        </ReactMarkdown>
    );
};

export default ProjectPage;

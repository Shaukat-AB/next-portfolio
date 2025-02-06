import ProjectImage from "@/components/project-card/ProjectImage";
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
    const [project] = projects.filter(
        (project) => convertToLowerCase(project.title) == title
    );
    if (!project) return;
    const respone: Response = await fetch(project.readme);
    if (!respone.ok) {
        throw new Error("Project not found.");
    }
    const readme = await respone.text();

    return (
        <article>
            <ReactMarkdown
                className="prose lg:prose-xl py-8 prose-a:no-underline"
                components={{
                    h1: ({ children }) => {
                        return (
                            <>
                                <h1>{children}</h1>
                                <figure className="relative w-full aspect-video">
                                    <ProjectImage project={project} />
                                    <figcaption className="sr-only">
                                        This shows landing page of{" "}
                                        {project.title}
                                    </figcaption>
                                </figure>
                            </>
                        );
                    },
                    a: ({ href, children }) =>
                        href && (
                            <span className="block py-4 w-full">
                                <Link href={href} className="btn-primary px-4">
                                    {children}
                                </Link>
                            </span>
                        ),
                }}
            >
                {readme}
            </ReactMarkdown>
        </article>
    );
};

export default ProjectPage;

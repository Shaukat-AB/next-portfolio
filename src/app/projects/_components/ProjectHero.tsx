import GithubButton from "@/components/hero-section/GithubButton";
import ProjectImage from "@/components/project-card/ProjectImage";
import { TProject } from "@/types";
import ProjectLink from "./ProjectLink";
import Link from "next/link";

const ProjectHero = ({
    project,
    children,
}: {
    project: TProject;
    children: React.ReactNode;
}) => {
    return (
        <>
            <h1>{children}</h1>
            <figure className="relative w-full aspect-video">
                <ProjectImage project={project} />
                <figcaption className="sr-only">
                    This shows landing page of {project.title}
                </figcaption>
            </figure>
            <div className="flex justify-end gap-4">
                {project?.demo && (
                    <Link
                        href={project.demo}
                        target="_blank"
                        className="btn-primary text-sm icon-container"
                    >
                        Demo
                    </Link>
                )}
                <GithubButton
                    href={project.github}
                    title="Code"
                    className="text-sm"
                />
            </div>
        </>
    );
};

export default ProjectHero;

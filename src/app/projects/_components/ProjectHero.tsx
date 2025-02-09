import ProjectImage from "@/components/project-card/ProjectImage";
import { TProject } from "@/types";

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
        </>
    );
};

export default ProjectHero;

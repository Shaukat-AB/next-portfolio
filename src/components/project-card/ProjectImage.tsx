import { TProject } from "@/types";
import Image from "next/image";

const ProjectImage = ({
    project,
    className = "",
}: {
    project: TProject;
    className?: string;
}) => {
    return (
        <Image
            className={`object-scale-down ${className}`}
            src={project?.image || "/images/project-image.jpg"}
            fill
            alt={project?.title || "Project"}
        />
    );
};

export default ProjectImage;

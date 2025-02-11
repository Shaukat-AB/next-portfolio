import Link from "next/link";
import { convertToLowerCase } from "@/lib/util";
import ProjectImage from "./ProjectImage";
import { TProject } from "@/types";

const ProjectCard = ({ project }: { project: TProject }) => {
    return (
        <div className="w-full mb-12 max-w-md mx-auto">
            <Link
                href={`projects/${convertToLowerCase(project?.title || "")}`}
                className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-90 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="relative w-full aspect-video md:flex-1 max-h-80">
                    <ProjectImage
                        project={project}
                        className="rounded-t-lg md:rounded-none md:rounded-s-lg"
                    />
                </div>
                {!project?.image && (
                    <span className="bg-gradient-to-b from-transparent to-black/30 text-xl absolute bottom-0 py-4 text-center w-full">
                        {project?.title}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default ProjectCard;

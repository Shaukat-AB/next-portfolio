import Link from "next/link";
import Image from "next/image";
import { convertToLowerCase } from "@/lib/util";

type Project = {
    project: {
        title: string;
        image: string;
        readme: string;
    };
};

const ProjectCard = ({ project }: Project) => {
    return (
        <div className="w-full mb-12 max-w-md mx-auto">
            <Link
                href={`projects/${convertToLowerCase(project?.title || "")}`}
                className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-90 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="relative w-full aspect-video md:flex-1 max-h-80">
                    <Image
                        className="object-scale-down rounded-t-lg md:rounded-none md:rounded-s-lg"
                        src={project?.image || "/images/project-image.jpg"}
                        sizes="1200px"
                        alt={project?.title || "Project"}
                        fill
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

import Link from 'next/link';
import { convertToLowerCase } from '@/lib/util';
import ProjectImage from './ProjectImage';
import { TProject } from '@/types';

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="w-full mb-12 max-w-md mx-auto">
      <Link
        href={`projects/${convertToLowerCase(project?.title || '')}`}
        className="relative flex flex-col items-center bg-gray-100 filter border border-border-gray rounded-lg shadow hover:brightness-90 hover:bg-gray-200 transition-all"
      >
        <div className="relative w-full aspect-[2/1] md:flex-1">
          <ProjectImage
            project={project}
            className="rounded-t-lg md:rounded-none md:rounded-s-lg"
          />
        </div>
        <div className="bg-background p-8 relative w-full aspect-[2/1] md:flex-1">
          <h3 className="text-lg font-semibold mb-5">{project?.title}</h3>
          <p className="leading-6 text-zinc-700">{project.shortDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

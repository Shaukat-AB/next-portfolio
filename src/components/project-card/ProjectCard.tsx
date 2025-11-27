import Link from 'next/link';
import { convertToLowerCase } from '@/lib/util';
import ProjectImage from './ProjectImage';
import { TProject } from '@/types';
import { useState } from 'react';

const ProjectCard = ({ project }: { project: TProject }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full mb-12 max-w-md mx-auto">
      <Link
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href={`projects/${convertToLowerCase(project?.title || '')}`}
        className="relative flex flex-col items-center bg-gray-100 filter border border-border-gray rounded-lg shadow md:flex-row hover:brightness-90 hover:bg-gray-200 transition-all"
      >
        <div className="relative w-full aspect-[2/1] md:flex-1">
          <ProjectImage
            project={project}
            className="rounded-t-lg md:rounded-none md:rounded-s-lg"
          />
        </div>
        {hover && (
          <span className="text-white font-bold transition bg-gradient-to-b from-transparent to-slate-900/90 text-xl absolute top-0 flex items-end justify-center py-4 text-center w-full h-full">
            {project?.title}
          </span>
        )}
      </Link>
    </div>
  );
};

export default ProjectCard;

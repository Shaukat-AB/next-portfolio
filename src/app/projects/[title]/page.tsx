import { projects } from '@/data/projects';
import { convertToLowerCase } from '@/lib/util';
import ReactMarkdown from 'react-markdown';
import ProjectLink from '../_components/ProjectLink';
import ProjectHero from '../_components/ProjectHero';
import { CheckIcon } from '@/lib/icons';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ title: string }>;
}) => {
  const title = (await params).title.toUpperCase();
  return {
    title: `${title}`,
  };
};

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
    throw new Error('Project not found.');
  }
  const readme = await respone.text();

  return (
    <article>
      <ReactMarkdown
        className="prose lg:prose-xl py-8 prose-a:no-underline"
        components={{
          h1: ({ children }) => (
            <ProjectHero project={project}>{children}</ProjectHero>
          ),
          a: ({ href, children }) => (
            <ProjectLink href={href}>{children}</ProjectLink>
          ),
          li: ({ children }) => (
            <li className="flex items-baseline gap-2">
              <CheckIcon className="size-6" />
              <span className="p-0 m-0">{children}</span>
            </li>
          ),
          img: ({ src, alt, width, height, sizes }) => (
            <Image
              src={src as string | StaticImport}
              sizes={sizes}
              alt={alt as string}
              width={width as number | `${number}`}
              height={height as number | `${number}`}
              priority
            />
          ),
        }}
      >
        {readme}
      </ReactMarkdown>
    </article>
  );
};

export default ProjectPage;

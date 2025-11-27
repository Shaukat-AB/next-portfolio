import { projects } from '@/data/projects';
import { convertToLowerCase } from '@/lib/util';
import ReactMarkdown from 'react-markdown';
import ProjectLink from '../_components/ProjectLink';
import ProjectHero from '../_components/ProjectHero';

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
        }}
      >
        {readme}
      </ReactMarkdown>
    </article>
  );
};

export default ProjectPage;

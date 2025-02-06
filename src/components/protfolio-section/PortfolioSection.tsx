import { projects } from "@/data/projects";
import ProjectCard from "../project-card/ProjectCard";
import GithubButton from "../hero-section/GithubButton";

const PortfolioSection = () => {
    return (
        <section className="mb-16 text-center">
            <h2 className="sub-title mb-16">Featured Projects</h2>
            <div className="flex flex-col flex-wrap md:flex-row items-center gap-16 justify-between">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
            <GithubButton />
        </section>
    );
};

export default PortfolioSection;

"use client";

import { projects as allProjects } from "@/data/projects";
import { useMemo, useState } from "react";
import ProjectCard from "../project-card/ProjectCard";
import GithubButton from "../hero-section/GithubButton";

const ShowProjects = ({ limit = 0 }) => {
    const [limited, setLimited] = useState(true);
    const projects = useMemo(() => {
        return limited ? allProjects.slice(0, limit) : allProjects;
    }, [limited]);

    return (
        <>
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
            <div className="w-full">
                {limited ? (
                    <button
                        className="btn-dark mx-auto"
                        onClick={() => setLimited(false)}
                    >
                        Expand more
                    </button>
                ) : (
                    <GithubButton title="More on GitHub" />
                )}
            </div>
        </>
    );
};

export default ShowProjects;

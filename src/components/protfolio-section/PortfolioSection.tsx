import ShowProjects from "./ShowProjects";

const limitProjectsCount = 4;

const PortfolioSection = () => {
    return (
        <section className="mb-16 text-center">
            <h2 className="sub-title mb-16">Featured Projects</h2>
            <div className="flex flex-col flex-wrap md:flex-row items-center gap-16 justify-between">
                <ShowProjects limit={limitProjectsCount} />
            </div>
        </section>
    );
};

export default PortfolioSection;

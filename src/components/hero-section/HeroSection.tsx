import SendEmail from "./SendEmail";
import GithubButton from "./GithubButton";

const HeroSection = () => {
    return (
        <section className="min-h-[80vh] text-center flex items-center justify-center flex-col mb-16">
            <h1 className="main-title mb-8">
                Build Responsive And Dynamic Apps
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Hi! my name is Shaukat Ali. I am a dedicated full-stack developer
                specializing in react.js front-end development,
                responsive web design, and the MERN Stack.
            </p>
            <div className="flex flex-col w-full gap-4 justify-center md:flex-row">
                <SendEmail />
                <GithubButton />
            </div>
        </section>
    );
};

export default HeroSection;

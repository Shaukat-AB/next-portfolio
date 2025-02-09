import SendEmail from "./SendEmail";
import GithubButton from "./GithubButton";

const HeroSection = () => {
    return (
        <section className="min-h-[80vh] text-center flex items-center justify-center flex-col mb-16">
            <h1 className="main-title mb-8">
                Build Apps Beyond Coding
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Hi! my name is Shaukat Ali. I am a full-stack website developer
                specializing in React.js, Front-end development, and the MERN
                stack. I can develop websites of all sizes. Do you need a
                website or want to work together? Let's start now.
            </p>
            <div className="flex flex-col w-full gap-4 justify-center md:flex-row">
                <SendEmail />
                <GithubButton />
            </div>
        </section>
    );
};

export default HeroSection;

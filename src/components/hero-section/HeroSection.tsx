import SendEmail from './SendEmail';
import GithubButton from './GithubButton';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] text-center flex items-center justify-center flex-col mb-16">
      <h1 className="main-title mb-4 sm:mb-8">Transform Ideas into Code</h1>
      <p className="mb-2 sm:mb-4 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48">
        Hi! my name is Shaukat Ali, a full-stack developer specializing in
        creating applications using React.js, Next.js and the MERN stack.
      </p>
      <p className="mb-6 sm:mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
        Do you need a website or want to work together? Feel free to reach out.
      </p>
      <div className="flex flex-col w-full gap-4 justify-center md:flex-row">
        <SendEmail />
        <GithubButton />
      </div>
    </section>
  );
};

export default HeroSection;

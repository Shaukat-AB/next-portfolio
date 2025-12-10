'use client';

import Link from 'next/link';

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className="bg-background-low">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="main-title mb-8">Something went wrong!</h1>
          <p className="sub-title mb-5">{error.message}</p>
          <button onClick={() => reset()} className="btn-primary mb-4">
            Try Again
          </button>
          <p className="text-lg font-light text-gray-500 dark:text-gray-400">
            <Link href="/" className="link">
              or go to the home page.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

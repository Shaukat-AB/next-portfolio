import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "NotFound",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <section className="min-h-[80vh] flex items-center dark:bg-gray-900">
            <div className="py-8 mx-auto lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="main-title mb-4">404</h1>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        That page is not found.
                    </p>
                    <Link href="/" className="btn-primary">
                        Go Back
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;

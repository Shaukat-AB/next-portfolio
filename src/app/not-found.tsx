import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "NotFound",
    description: "Page not found",
};

const NotFound = () => {
    return <div>NotFound</div>;
};

export default NotFound;

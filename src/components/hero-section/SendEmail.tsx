import Link from "next/link";

const SendEmail = () => {
    return (
        <Link
            target="_blank"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="btn-primary text-center"
        >
            Send Email
        </Link>
    );
};

export default SendEmail;

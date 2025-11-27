import Link from 'next/link';

const ProjectLink = ({
  href = '',
  children = null,
}: {
  href?: string;
  children?: React.ReactNode;
}) => {
  return (
    href && (
      <span className="block py-4 w-full">
        <Link href={href} className="btn-primary px-4">
          {children}
        </Link>
      </span>
    )
  );
};

export default ProjectLink;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ title = '', href = '/' }) => {
  const pathname = usePathname();
  const isActive = (pathname == '/' && title == 'Home') || pathname == href;

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
    >
      {title}
    </Link>
  );
};
export default NavLink;

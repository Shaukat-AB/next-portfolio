import { TLink } from '@/types';
import FooterLink from './FooterLink';

const FooterLinkList = ({ links }: { links: TLink[] }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.title}>
          <FooterLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default FooterLinkList;

import { PropsWithChildren } from 'react';
import './Link.scss';

interface LinkProps {
  href: string;
}

function Link({ children, href }: PropsWithChildren<LinkProps>): JSX.Element {
  return (
    <a className="link" href={href} role="button">
      {children}
    </a>
  );
}

export default Link;

import { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import './Button.scss';

interface ButtonProps {
  href: string;
}

function Button({
  children,
  href,
  className,
}: PropsWithChildren<
  ButtonProps & HtmlHTMLAttributes<HTMLAnchorElement>
>): JSX.Element {
  return (
    <a
      className={className ? `button ${className}` : 'button'}
      href={href}
      role="button"
    >
      {children}
    </a>
  );
}

export default Button;

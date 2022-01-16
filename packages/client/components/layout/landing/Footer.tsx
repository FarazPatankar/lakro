import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mb-1 text-text-secondary text-center text-sm">
      Made by <ILink href="https://twitter.com/notnickdev">@notnickdev</ILink>{' '}
      with &hearts; in England.
      <br />
      Open Source code hosted on{' '}
      <ILink href="https://github.com/notnick12/lakro">GitHub</ILink>
      <br />
      &copy; {new Date().getFullYear()} Lakro. All rights reserved.
    </footer>
  );
};

type LinkProps = {
  href: string;
};

const ILink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a target="_blank" className="text-accent font-bold hover:underline">
        {children}
      </a>
    </Link>
  );
};

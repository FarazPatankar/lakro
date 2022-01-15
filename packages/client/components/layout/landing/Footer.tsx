import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mb-1 text-slate-500 text-center text-sm">
      made by <ILink href="https://twitter.com/notnickdev">@notnickdev</ILink>{' '}
      with 💙
      <br />
      open source code hosted on{' '}
      <ILink href="https://github.com/notnick12/lakro">github</ILink>
    </footer>
  );
};

type LinkProps = {
  href: string;
};

const ILink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a target="_blank" className="text-blue-600 font-bold hover:underline">
        {children}
      </a>
    </Link>
  );
};

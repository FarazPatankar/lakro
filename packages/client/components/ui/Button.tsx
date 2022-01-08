import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      className="flex items-center justify-center text-white rounded-md bg-blue-600 h-12 pl-4 pr-4 font-bold"
      {...props}
    >
      {props.children}
    </button>
  );
};

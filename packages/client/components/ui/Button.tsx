import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      className="flex items-center w-fit whitespace-nowrap justify-center text-white rounded-lg bg-blue-600 h-12 text-sm px-4 py-2 hover:bg-blue-700 duration-500"
      {...props}
    >
      {props.children}
    </button>
  );
};

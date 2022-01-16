import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      className="flex items-center font-semibold w-fit whitespace-nowrap justify-center text-white rounded-lg bg-accent h-12 text-sm px-4 py-2 hover:bg-fuchsia-700 duration-500 md:text-base"
      {...props}
    >
      {props.children}
    </button>
  );
};

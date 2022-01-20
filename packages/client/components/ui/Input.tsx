import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export const Input: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  return (
    <input
      className="px-4 py-2 bg-bg-secondary text-white rounded-lg h-12 outline-none"
      {...props}
    />
  );
};

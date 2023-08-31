interface ITextProps {
  text: string;
  className?: string;
}

export const Text = ({ text, className }: ITextProps) => {
  return <p className={`${className} text-base text-gray-600`}>{text}</p>;
};

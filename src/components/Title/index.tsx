interface ITitleProps {
  title: string;
  className: string;
}

export const Title = ({ title, className }: ITitleProps) => {
  return <h2 className={`${className} text-3xl`}>{title}</h2>;
};

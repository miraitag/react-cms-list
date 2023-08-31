import { Text } from "../Text";
import { ArrowIcon } from "../icons/ArrowIcon";

interface IHeaderTableProps {
  title: string;
  className?: string;
}

export const HeaderTable = ({ title, className }: IHeaderTableProps) => {
  return (
    <div className={`${className} flex`}>
      <Text className="mr-3" text={title} />
      <div className="flex flex-col">
        <button className="h-3 w-3" type="button">
          <ArrowIcon direction="up" />
        </button>
        <button className="h-3 w-3" type="button">
          <ArrowIcon direction="down" />
        </button>
      </div>
    </div>
  );
};

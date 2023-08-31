interface IArrowProps {
  direction: "up" | "down";
}

export const ArrowIcon = ({ direction }: IArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "down" ? (
        <polygon points="12 19 19 9 5 9"></polygon>
      ) : (
        <polygon points="12 5 19 15 5 15"></polygon>
      )}
    </svg>
  );
};

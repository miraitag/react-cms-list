export const SpinnerIcon = () => {
  return (
    <svg
      className="animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="none"
        stroke="currentColor"
        d="M12 2.5a9.5 9.5 0 019.5 9.5M2.5 12A9.5 9.5 0 0112 2.5"
      />
    </svg>
  );
};

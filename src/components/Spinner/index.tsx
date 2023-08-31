import { memo } from "react";
import { useAppSelector } from "../../redux/hooks/selectors";
import { RootState } from "../../redux/store";
import { SpinnerIcon } from "../icons/SpinnerIcon";

export const Spinner = memo(() => {
  const spinner = useAppSelector((state: RootState) => state.spinner);

  return (
    <div
      className={`${
        spinner.isLoading ? "" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 justify-center items-center flex z-10`}
    >
      <div className="w-20 h-20">
        <SpinnerIcon />
      </div>
    </div>
  );
});

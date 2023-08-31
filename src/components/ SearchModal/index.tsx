import { CloseIcon } from "../icons/CloseIcon";
import "./SearchModal.scss";

interface ISearchModalProps {
  isHidden: boolean;
  onCloseModalButton: () => void;
}

export const SearchModal = ({
  isHidden,
  onCloseModalButton,
}: ISearchModalProps) => {
  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } fixed inset-0 bg-black bg-opacity-50 justify-center items-center flex`}
    >
      <div className="bg-white py-7 pl-8 pr-10 rounded-lg w-6/12 relative">
        <input
          className="w-full mb-5 focus:outline-none bg-transparent text-gray-600 text-lg"
          type="text"
          name=""
          placeholder="Type something"
        />
        <span className="flex w-full mb-5 text-sm text-gray-500">
          RECOMMENDED
        </span>
        <ul>
          <li className="search-modal__item text-base text-gray-600 relative">
            <button
              className="w-full text-left search-modal__item-button relative"
              type="button"
            >
              Title goes here
            </button>
          </li>
          <li className="search-modal__item text-base text-gray-600 relative">
            <button
              className="w-full text-left search-modal__item-button relative"
              type="button"
            >
              Title goes here
            </button>
          </li>
        </ul>
        <button
          onClick={onCloseModalButton}
          className="absolute top-4 right-4 h-7 w-7"
          type="button"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

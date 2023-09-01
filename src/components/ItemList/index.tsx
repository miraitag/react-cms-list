import { IUser } from "../../interfaces/user.interface";
import { colorCapitalize } from "../../util/colorCapitalize";
import { currency } from "../../util/currency";
import "./ItemList.scss";

interface IItemListProps {
  user: IUser;
}

export const ItemList = ({ user }: IItemListProps) => {
  return (
    <li className="hover:bg-gray-100 cursor-pointer flex items-center relative">
      <input
        className="item-list__input mr-5 absolute left-4"
        type="checkbox"
        name={user.id.toString()}
        id={user.id.toString()}
      />
      <label
        className="item-list__label w-full flex gap-4 pl-12 pr-4 py-4"
        htmlFor={user.id.toString()}
      >
        {/* FullName */}
        <div className="w-2/4 flex items-center">
          <div className={`item-list__badge w-7 h-7 flex items-center justify-center rounded-lg text-white ${colorCapitalize[user.firstname.slice(0, 1)]}`}>
            {user.firstname.slice(0, 1)}
          </div>
          <p className="item-list__name ml-3 text-base text-black">
            {user.firstname}
          </p>
        </div>

        {/* Specilities */}
        <div className="w-2/4 flex items-center">
          <span className="item-list__specialities text-sm rounded-lg px-2 py-1 w-max bg-gray-300 text-gray-500 mr-2 last:mr-0">
            Surgery
          </span>
          <span className="item-list__specialities text-sm rounded-lg px-2 py-1 w-max bg-gray-300 text-gray-500 mr-2 last:mr-0">
            Medical
          </span>
          <span className="item-list__specialities text-sm rounded-lg px-2 py-1 w-max bg-gray-300 text-gray-500 mr-2 last:mr-0">
            4+
          </span>
        </div>

        {/* Day Rate */}
        <p className="item-list__dayrate w-1/4 flex items-center text-base text-black">
          { currency(300000.555, "$", 2)}
        </p>

        {/* Availability */}
        <p className="item-list__availability w-1/4 flex items-center text-base text-black">
          No
        </p>
      </label>
    </li>
  );
};

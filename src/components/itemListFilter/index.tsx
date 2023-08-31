import { HeaderTable } from "../HeaderTable";

export const ItemListFilter = () => {
  return (
    <>
      {/* FULLNAME */}
      <label className="w-2/4 item-list__input flex items-center" htmlFor="">
        <input className="mr-5" type="checkbox" name="" id="" />
        <HeaderTable className="w-1/4" title="FULLNAME" />
      </label>

      {/* SPECIALITIES */}
      <HeaderTable className="w-2/4 pl-5" title="SPECIALITIES" />

      {/* DAY RATE */}
      <HeaderTable className="w-1/4 pl-3" title="DAY RATE" />

      {/* AVAILABILITY */}
      <HeaderTable className="w-1/4" title="AVAILABILITY" />
    </>
  );
};

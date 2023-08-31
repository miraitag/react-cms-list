import { useEffect, useState } from "react";
import { SearchModal } from "../../components/ SearchModal";
import { ItemList } from "../../components/ItemList";
import { Search } from "../../components/Search";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { ItemListFilter } from "../../components/itemListFilter";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/selectors";
import { userAsync } from "../../redux/slices/user/user.slice";
import { RootState } from "../../redux/store";
import "./MainWrapper.scss";

export const MainWrapper = () => {
  /* `const [isHiddenModal, setIsHiddenModal] = useState(true);` is a React hook that declares a state variable
  `isHiddenModal` and a function `setIsHiddenModal` to update its value. The initial value of `isHiddenModal` is set to
  `true`. This hook is used to manage the visibility of a modal component in the MainWrapper component. */
  const [isHiddenModal, setIsHiddenModal] = useState(true);

  let isLoadingUsers = false;

  const users = useAppSelector((state: RootState) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoadingUsers) {
      isLoadingUsers = true;
      dispatch(userAsync());
    }
  }, []);

  /**
   * The function handleOnCloseModalButton sets the state variable setIsHiddenModal to false.
   */
  const handleOnCloseModalButton = () => {
    setIsHiddenModal(true);
  };

  /**
   * The function handleOnOpenClickFilter sets the state variable isHiddenModal to true.
   */
  const handleOnOpenClickFilter = () => {
    setIsHiddenModal(false);
  };

  return (
    <main className="container mx-auto flex justify-center items-center p-10">
      <div className="w-9/12 h-96">
        <Title className="mb-3" title="Contractors" />
        <Text
          className="mb-10"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae quis delectus ab commodi totam officiis quos dolores minus consequuntur minima ut, et consectetur, maiores odio necessitatibus illo, eius voluptatibus."
        />
        <section className="main-wrapper__list w-full py-5 rounded-lg shadow-2xl overflow-y-scroll">
          <div className="flex px-5 mb-10">
            <Search onOpenClickFilter={handleOnOpenClickFilter} />
          </div>

          <div className="flex gap-4 px-4 py-4">
            <ItemListFilter />
          </div>

          <ul className="divide-y divide-gray-200">
            {users.length > 0 &&
              users.map((user) => {
                return <ItemList key={user.id} user={user} />;
              })}
          </ul>
        </section>
      </div>
      <SearchModal
        isHidden={isHiddenModal}
        onCloseModalButton={handleOnCloseModalButton}
      />
    </main>
  );
};

import { Provider } from "react-redux";
import { Spinner } from "./components/Spinner";
import { MainWrapper } from "./pages/MainWrapper";
import { setupStore } from "./redux/store";

export const App = () => {
  return (
    <Provider store={setupStore()}>
      <Spinner />
      <MainWrapper />
    </Provider>
  );
};

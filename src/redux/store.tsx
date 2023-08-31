import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from "@reduxjs/toolkit";
import spinnerSlice from "./slices/spinner/spinner.slice";
import userSlice from "./slices/user/user.slice";

/**
 * Creating a root reducer that is an object with a property called reducer that is an object with properties that are the reducers.
 */
export const rootReducer = combineReducers({
  spinner: spinnerSlice,
  users: userSlice,
});

/* Creating a store that is an object with a property called dispatch that is a function that takes an action and
dispatches it to the reducers. */
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

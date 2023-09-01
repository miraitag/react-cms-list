import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";
import { IUser } from "../../../interfaces/user.interface";
import { hide, show } from "../spinner/spinner.slice";

const initialState: IUser[] = [];

export const userAsync = createAsyncThunk(
  "users/fetch",
  async (_, { dispatch }) => {
    dispatch(show());
    try {
      const response: IUser[] = await api.get("/users");
      dispatch(hide());
      return response;
    } catch (error: unknown) {
      //dispatch(hide());
      //return rejectWithValue(agilityTextJson as IAgilityText[]);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.fulfilled, (state, action) => {
        const users: IUser[] = action.payload as IUser[];

        return [...state, ...users];
      })
      .addCase(userAsync.rejected, (state) => {
        return [...state];
      });
  },
});

export default userSlice.reducer;

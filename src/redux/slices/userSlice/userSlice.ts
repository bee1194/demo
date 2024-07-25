import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { APIDataState } from "@/constants/types";
import { IUser } from "@/models/user";
import { fetchUser } from "@/redux/slices/userSlice/thunks";

const defaultValue = {
  data: null,
  error: null,
  loading: false,
};

const initialState: UserSliceState = {
  listing: defaultValue,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    listRequest: (state) => {
      state.listing.loading = true;
    },
    listSuccess: (state, action: PayloadAction<IUser>) => {
      state.listing.loading = false;
      state.listing.data = action.payload;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listing.loading = false;
      state.listing.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.listing.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.listing.data = action.payload;
        state.listing.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.listing.loading = false;
        state.listing.error = action.payload ?? "Some thing went wrong";
      });
  },
});

export interface UserSliceState {
  listing: APIDataState<IUser>;
}

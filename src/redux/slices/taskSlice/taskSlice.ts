import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask, TaskSliceState } from "@/models/task.model";

const defaultValue = {
  data: null,
  error: null,
  loading: false,
};

const initialState: TaskSliceState = {
  listing: defaultValue,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.listing.loading = true;
    },
    getSuccess: (state, action: PayloadAction<ITask[]>) => {
      state.listing.loading = false;
      state.listing.data = action.payload;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.listing.loading = false;
      state.listing.error = action.payload;
    },
  },
});

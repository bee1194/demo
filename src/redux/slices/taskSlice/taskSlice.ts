import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask, TaskSliceState } from "@/models/task.model";

const defaultValue = {
  data: null,
  error: null,
  loading: false,
};

const initialState: TaskSliceState = {
  get: defaultValue,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.get.loading = true;
    },
    getSuccess: (state, action: PayloadAction<ITask[]>) => {
      state.get.loading = false;
      state.get.data = action.payload;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.get.loading = false;
      state.get.error = action.payload;
    },
  },
});

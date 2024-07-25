/* Instruments */
import { taskSlice, userSlice } from "@/redux/slices";

export const reducer = {
  user: userSlice.reducer,
  task: taskSlice.reducer,
};

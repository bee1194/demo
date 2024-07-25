import type { ReduxState } from "@/redux";
export const selectTask = (state: ReduxState) => state.task;

import type { ReduxState } from "@/redux";
export const selectTasks = (state: ReduxState) => state.tasks.listing;

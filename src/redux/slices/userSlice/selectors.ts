import type { ReduxState } from "@/redux";
export const selectUser = (state: ReduxState) => state.user;

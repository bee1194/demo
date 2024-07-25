import { ReduxThunkAction, taskSlice } from "@/redux";
import taskService from "@/services/taskService";

export const getTasks = (): ReduxThunkAction => async (dispatch, getState) => {
  try {
    dispatch(taskSlice.actions.getRequest());
    const response = await taskService.get();
    dispatch(taskSlice.actions.getSuccess(response));
  } catch (e) {
    dispatch(taskSlice.actions.getFail("Some thing went wrong"));
  }
};

import { ReduxThunkAction, taskSlice } from "@/redux";
import taskService from "@/services/taskService";

export const getTasks = (): ReduxThunkAction => async (dispatch, getState) => {
  try {
    dispatch(taskSlice.actions.getRequest());
    const response = await taskService.getTasks();
    dispatch(taskSlice.actions.getSuccess(response));
  } catch (e) {
    dispatch(taskSlice.actions.getFail("Some thing went wrong"));
  }
};

export const updateTask =
  (id: number): ReduxThunkAction =>
  async (dispatch, getState) => {
    //Logic here
  };

export const assignTask =
  (id: number, assignee: number): ReduxThunkAction =>
  async (dispatch, getState) => {
    //Logic here
  };

export const deleteTask =
  (id: number): ReduxThunkAction =>
  async (dispatch, getState) => {
    //Logic here
  };

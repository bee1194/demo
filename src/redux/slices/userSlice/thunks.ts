import { IUser } from "@/models/user";
import { ReduxThunkAction } from "@/redux";
import { createAppAsyncThunk } from "@/redux/createAppAsyncThunk";
import { userSlice } from "@/redux/slices/userSlice/userSlice";
import userService from "@/services/userService";

export const fetchUser = createAppAsyncThunk("user/fetchUser", async () => {
  const response = await userService.fetchUser();
  return response as unknown as IUser;
});

export const fetchUser2 =
  (): ReduxThunkAction => async (dispatch, getState) => {
    try {
      dispatch(userSlice.actions.listRequest());
      const response = await userService.fetchUser();
      dispatch(userSlice.actions.listSuccess(response as unknown as IUser));
    } catch (e) {
      dispatch(userSlice.actions.listFail("CC"));
    }
  };

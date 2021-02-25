import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Map, Object } from "./type";

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE1_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchScene1 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  console.log(map);
  dispatch(fetchAsync.success(map));
};

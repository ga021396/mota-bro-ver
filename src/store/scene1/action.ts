import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Map, Object } from "./type";

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE1_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchAsync2 = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE2_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchScene1 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync.success(map));
};

export const fetchScene2 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync2.success(map));
};

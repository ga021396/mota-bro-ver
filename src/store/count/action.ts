import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Error } from "./type";
import { fetchRestaurant } from "./api";

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SUCCESS",
  "FETCH_FAILURE"
)<undefined, number, Error>();

export const fetchMessageAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_MESSAGE_SUCCESS",
  "FETCH_FAILURE"
)<undefined, string, Error>();

export const fetchCount = (count: number): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync.success(count));
};

export const fetchMessage = (message: string): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchMessageAsync.success(message));
};

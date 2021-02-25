import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Hero } from "./type";

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_HERO_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Hero, Error>();

export const fetch = (hero: Hero): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync.success(hero));
};

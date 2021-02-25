import { createSelector } from "reselect";
import { RootState } from "typesafe-actions";
import { countState } from "./reducer";

export const getState = (state: RootState) => state.count;

export const getCount = createSelector(
  getState,
  (state: countState) => state.count
);

export const getMessage = createSelector(
  getState,
  (state: countState) => state.message
);

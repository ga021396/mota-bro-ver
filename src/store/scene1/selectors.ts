import { createSelector } from "reselect";
import { RootState } from "typesafe-actions";
import { countState } from "./reducer";

export const getState = (state: RootState) => state.scene1;

export const getScene1 = createSelector(
  getState,
  (state: countState) => state.item
);

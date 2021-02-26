import { createSelector } from "reselect";
import { RootState } from "typesafe-actions";
import { countState } from "./reducer";

export const getState = (state: RootState) => state.scene1;

export const getScene1 = createSelector(
  getState,
  (state: countState) => state.item
);

export const getScene2 = createSelector(
  getState,
  (state: countState) => state.item2
);

export const getScene3 = createSelector(
  getState,
  (state: countState) => state.item3
);

export const getScene4 = createSelector(
  getState,
  (state: countState) => state.item4
);

export const getScene5 = createSelector(
  getState,
  (state: countState) => state.item5
);

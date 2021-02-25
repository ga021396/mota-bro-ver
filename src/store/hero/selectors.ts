import { createSelector } from "reselect";
import { RootState } from "typesafe-actions";
import { countState } from "./reducer";

export const getState = (state: RootState) => state.hero;

export const getHero = createSelector(
  getState,
  (state: countState) => state.item
);

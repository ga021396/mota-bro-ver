import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchAsync } from "./action";

const w = {
  exists: true,
  name: "wall",
};

const n = {
  exists: true,
  name: "next",
};

const S = {
  exists: true,
  name: "smorc",
};

const A = {
  exists: true,
  name: "afa",
};

const K = {
  exists: true,
  name: "k7",
};

const M = {
  exists: true,
  name: "mmd",
};

const F = {
  exists: true,
  name: "sta",
};

const initMap = [
  [n, S, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [w, w, w, w, w, w, w, w, w, w, 0],
  [0, 0, 0, w, 0, w, K, 0, F, w, 0],
  [F, 0, S, 0, 0, w, 0, 0, 0, w, 0],
  [w, 0, w, w, 0, w, w, w, S, w, 0],
  [0, 0, 0, w, 0, S, 0, 0, 0, w, 0],
  [F, 0, 0, w, 0, w, w, w, w, w, 0],
  [w, 0, w, w, 0, 0, 0, 0, 0, 0, 0],
  [0, S, 0, w, w, 0, w, w, w, 0, w],
  [0, 0, 0, w, 0, 0, 0, w, 0, S, 0],
  [A, 0, 0, w, 0, 0, 0, w, F, 0, M],
];

export const item = createReducer(initMap).handleAction(
  [fetchAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

const scene1Reducer = combineReducers({
  item,
});

export default scene1Reducer;
export type countState = ReturnType<typeof scene1Reducer>;

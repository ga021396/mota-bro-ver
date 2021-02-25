import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchAsync, fetchAsync2 } from "./action";
import { initMap, initMap2 } from "./data";

export const item = createReducer(initMap).handleAction(
  [fetchAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

export const item2 = createReducer(initMap2).handleAction(
  [fetchAsync2.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

const scene1Reducer = combineReducers({
  item,
  item2,
});

export default scene1Reducer;
export type countState = ReturnType<typeof scene1Reducer>;

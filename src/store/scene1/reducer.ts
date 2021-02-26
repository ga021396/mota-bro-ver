import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import {
  fetchAsync,
  fetchAsync2,
  fetchAsync3,
  fetchAsync4,
  fetchAsync5,
} from "./action";
import { initMap, initMap2, initMap4 } from "./data";

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

export const item3 = createReducer([]).handleAction(
  [fetchAsync3.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

export const item4 = createReducer(initMap4).handleAction(
  [fetchAsync4.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

export const item5 = createReducer([]).handleAction(
  [fetchAsync5.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

const scene1Reducer = combineReducers({
  item,
  item2,
  item3,
  item4,
  item5,
});

export default scene1Reducer;
export type countState = ReturnType<typeof scene1Reducer>;

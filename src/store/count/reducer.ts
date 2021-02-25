import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchAsync, fetchMessageAsync } from "./action";

export const count = createReducer(0 as number).handleAction(
  [fetchAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

export const message = createReducer("" as string).handleAction(
  [fetchMessageAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

const countReducer = combineReducers({
  count,
  message,
});

export default countReducer;
export type countState = ReturnType<typeof countReducer>;

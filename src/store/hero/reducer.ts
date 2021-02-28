import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchAsync } from "./action";
import { Hero } from "./type";

const initHero = {
  x: 5,
  y: 10,
  atk: 10,
  def: 10,
  hp: 100,
  name: "",
  des: "",
  money: 0,
  key: 0,
};

export const item = createReducer(initHero).handleAction(
  [fetchAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

const heroReducer = combineReducers({
  item,
});

export default heroReducer;
export type countState = ReturnType<typeof heroReducer>;

import { combineReducers } from "redux";
import countReducer from "./count/reducer";
import heroReducer from "./hero/reducer";
import scene1Reducer from "./scene1/reducer";

export default combineReducers({
  count: countReducer,
  hero: heroReducer,
  scene1: scene1Reducer,
});

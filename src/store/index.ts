import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// Note: this API requires redux@>=3.1.0
// const middlewares=[thunk.withExtraArgument({})]
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
export default store;

// Combine all reducers

import { combineReducers } from "redux";

import { productsReducer } from "./Reducers";

export const rootReducer = combineReducers({
  productsReducer,
});

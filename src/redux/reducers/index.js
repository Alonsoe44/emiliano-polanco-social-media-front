import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const rooReducer = combineReducers({
  user: userReducer,
});

import { combineReducers } from "redux";
import allUsersReducer from "./allUsersReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
});

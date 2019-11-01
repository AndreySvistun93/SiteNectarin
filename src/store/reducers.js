import { combineReducers } from "redux";
import { menuReducer } from "./menu/reducer";
import { appReducer } from "./app/reducer";

export default combineReducers({
  menu: menuReducer,
  app: appReducer
});

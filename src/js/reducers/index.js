import { combineReducers } from "redux";

import osintsReducer from "./osintsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  osintsReducer,
  userReducer
})

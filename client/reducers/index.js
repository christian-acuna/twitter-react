/*jshint esversion: 6 */
import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
// import user from "./userReducer"

export default combineReducers({
  tweets
});

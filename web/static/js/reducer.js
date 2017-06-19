// REDUCER AGGREGATE
import { combineReducers } from "redux-immutable";
import users from "./users/reducer";
import tweets from "./tweets/reducer";

export default combineReducers({
  users,
  tweets,
});

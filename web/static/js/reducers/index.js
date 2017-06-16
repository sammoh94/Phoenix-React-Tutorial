// REDUCER AGGREGATE
import { combineReducers } from "redux-immutable";
import login from "./login/reducer";
import register from "./register";
import users from "./users";
import show from "./show"
import loadTweets from "./tweets/load";
import editTweet from "./tweets/edit";
import createTweet from "./tweets/create";

export default combineReducers({
  login,
  register,
  users,
  show,
  loadTweets,
  editTweet,
  createTweet
});

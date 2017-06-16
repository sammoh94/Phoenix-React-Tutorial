// SELECTOR FILE
import createSelector from 'reselect';

export const userLogin = function (state) {
  return state.getIn(["login", "currentUser"]);
}

export const userRegister = function (state) {
  return state.getIn(["register", "currentUser"]);
}

export const setIdUserLogin = function (state) {
  return state.getIn(["login", "currentUserID"]);
}

export const setIdUserRegister = function (state) {
  return state.getIn(["register", "currentUserID"]);
}

export const getUserTweets = function (state) {
  return state.getIn(["loadTweets", "tweets"])
}

export const loadUsers = function (state) {
  return state.getIn(["users", "usersList"]);
}

export const setUser = function (state) {
  return state.getIn(["show", "currentUser"]);
}

export const setUserID = function (state) {
  return state.getIn(["show", "currentUserID"]);
}

export const getNewTweetContent = function (state) {
  return state.getIn(["editTweet", "updated"]);
}

export const updateRequestSent = function (state) {
  return state.getIn(["editTweet", "submitted"]);
}

export const tweetCreated = function (state) {
  return state.getIn(["createTweet", "created"]);
}

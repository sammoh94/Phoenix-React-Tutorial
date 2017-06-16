const loginUser = function (user) {
  return {
    type: "USER_LOGIN",
    payload: user
  }
}

const registerUser = function (user) {
  return {
    type: "USER_REGISTER",
    payload: user
  }
}

const setUserIdOnLogin = function (user_id) {
  return {
    type: "SET_USER_LOGIN_ID",
    payload: user_id
  }
}

const setUserIdOnRegister = function (user_id) {
  return {
    type: "SET_USER_REGISTER_ID",
    payload: user_id
  }
}

const loadUsers = function () {
  return {
    type: "GET_ALL_USERS"
  }
}

const setUsers = function (users) {
  return {
    type: "SET_USERS",
    payload: users
  }
}

const getUser = function (user_id) {
  return {
    type: "GET_USER",
    payload: user_id
  }
}

const setUser = function (userInfo) {
  return {
    type: "SET_USER",
    payload: userInfo
  }
}

const getUserTweets = function (user_id) {
  return {
    type: "GET_USER_TWEETS",
    payload: user_id
  }
}

const setUserTweets = function (tweets) {
  return {
    type: "SET_USER_TWEETS",
    payload: tweets
  }
}

const requestTweetUpdate = function (tweetInfo) {
  return {
    type: "UPDATE_TWEET",
    payload: tweetInfo
  }
}

const tweetUpdated = function (updated) {
  return {
    type: "TWEET_UPDATED",
    payload: updated
  }
}

const resetState = function (reset) {
  return {
    type: "RESET_STATE",
    payload: reset
  }
}

const createTweet = function (tweet) {
  return {
    type: "CREATE_TWEET",
    payload: tweet
  }
}

const tweetCreated = function () {
  return {
    type: "TWEET_CREATED"
  }
}

const deleteTweet = function (tweetInfo) {
  return {
    type: "DELETE_TWEET",
    payload: tweetInfo
  }
}

const tweetDeleted = function (tweet_id) {
  return {
    type: "TWEET_DELETED",
    payload: tweet_id
  }
}

const deleteUser = function (userInfo) {
  return {
    type: "DELETE_USER",
    payload: userInfo
  }
}

const userDeleted = function (user_id) {
  return {
    type: "USER_DELETED",
    payload: user_id
  }
}
export default {
  loginUser,
  registerUser,
  setUserIdOnLogin,
  setUserIdOnRegister,
  loadUsers,
  setUsers,
  getUser,
  setUser,
  getUserTweets,
  setUserTweets,
  requestTweetUpdate,
  tweetUpdated,
  resetState,
  createTweet,
  tweetCreated,
  deleteTweet,
  tweetDeleted,
  deleteUser,
  userDeleted
}

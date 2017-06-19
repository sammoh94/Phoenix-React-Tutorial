import types from "./types";

const getUserTweets = function (user_id) {
  return {
    type: types.GET_USER_TWEETS,
    payload: user_id
  }
}

const deleteTweet = function (tweetInfo) {
  return {
    type: types.DELETE_TWEET,
    payload: tweetInfo
  }
}

const setUserTweets = function (tweets) {
  return {
    type: types.SET_USER_TWEETS,
    payload: tweets
  }
}

const tweetDeleted = function (tweet_id) {
  return {
    type: types.TWEET_DELETED,
    payload: tweet_id
  }
}

export default {
  getUserTweets,
  deleteTweet,
  setUserTweets,
  tweetDeleted
}

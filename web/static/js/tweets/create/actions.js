import types from "./types";

const createTweet = function (tweet) {
  return {
    type: types.CREATE_TWEET,
    payload: tweet
  }
}

const tweetCreated = function () {
  return {
    type: types.TWEET_CREATED
  }
}

export default {
  createTweet,
  tweetCreated
}

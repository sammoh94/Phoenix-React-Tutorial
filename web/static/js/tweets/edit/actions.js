import types from "./types";

const requestTweetUpdate = function (tweetInfo) {
  return {
    type: types.UPDATE_TWEET,
    payload: tweetInfo
  }
}

const tweetUpdated = function (updated) {
  return {
    type: types.TWEET_UPDATED,
    payload: updated
  }
}

export default {
  requestTweetUpdate,
  tweetUpdated
}

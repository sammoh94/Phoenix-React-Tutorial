import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onUserTweetsGet() {
  yield takeEvery("GET_USER_TWEETS", getTweetsForUser);
}

function* getTweetsForUser(action) {
  let tweets = []
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch("/api/users/"+action.payload+"/tweets", requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not load Tweets for given User ID");
    } else {
      return response.json().then(function (data) {
        tweets = data.tweets
      });
    }
  });
  if (tweets.length > 0) {
    yield put(actions.setUserTweets(tweets));
  }
}

function* deleteTweet() {
  yield takeEvery("DELETE_TWEET", deleteThisTweet);
}

function* deleteThisTweet(action) {
  let tweet_deleted = false;
  const user_id  = action.payload.user_id;
  const tweet_id = action.payload.id;
  const url      = "/api/users/"+user_id+"/tweets/"+tweet_id;
  const requestParams = {
    method: "DELETE",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not delete tweet");
    } else {
      tweet_deleted = true;
      return response;
    }
  });
  if (tweet_deleted) {
    yield put(actions.tweetDeleted(tweet_id));
  }
}

export default [
  onUserTweetsGet,
  deleteTweet
]

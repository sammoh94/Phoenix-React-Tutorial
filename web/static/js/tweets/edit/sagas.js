import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onUpdateTweet() {
  yield takeEvery("UPDATE_TWEET", updateGivenTweet);
}

function* updateGivenTweet(action) {
  let tweet_updated = null
  const requestParams = {
    method: "PUT",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"},
    body: JSON.stringify({"tweet": {"tweet": action.payload.tweet}, "user_id": action.payload.user_id, "id": action.payload.id})
  }
  const url = `/api/users/${action.payload.user_id}/tweets/${action.payload.id}`;
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not Update Tweet")
      tweet_updated = false;
    } else {
      tweet_updated = true;
    }
  });
  if (tweet_updated !== null) {
    yield put(actions.tweetUpdated(tweet_updated));
  }
}

export default [
  onUpdateTweet
]

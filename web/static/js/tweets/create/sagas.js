import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onCreateTweet() {
  yield takeEvery("CREATE_TWEET", createNewTweet);
}

function* createNewTweet(action) {
  let created_tweet = false;
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json" },
    body: JSON.stringify({
      "tweet": {"tweet": action.payload.tweet},
      "user_id": action.payload.user_id})
  }
  const url = "/api/users/"+action.payload.user_id+"/tweets";
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error generating new tweet");
    } else {
      return response.json().then(function (data) {
        console.log(data);
        created_tweet = true
      });
    }
  });
  if (created_tweet) {
    yield put(actions.tweetCreated());
  }
}

export default [
  onCreateTweet
]

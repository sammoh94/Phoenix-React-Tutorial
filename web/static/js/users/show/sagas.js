import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onGetUser() {
  yield takeEvery("GET_USER", getThisUser);
}

function* getThisUser(action) {
  let user = null
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch("/api/users/"+action.payload, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not retrieve User with given ID");
    } else {
      return response.json().then(function (data) {
        user = data
      });
    }
  });
  if (user) {
    yield put(actions.setUser(user));
  }
}

export default [
  onGetUser
]

import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onLoginUser() {
  yield takeEvery("USER_LOGIN", loginUser);
}

function* loginUser(action) {
  let userID = null
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": action.payload }),
  }
  yield fetch('/api/login', requestParams).then(function (response) {
    console.log(response);
    if (!response.ok) {
      window.alert("Please enter a valid username");
    } else {
      return response.json().then(function (data) {
        userID = data.id
      });
    }
  });
  if (userID) {
    yield put(actions.setUserIdOnLogin(userID.toString()))
  }
}

export default [
  onLoginUser
];

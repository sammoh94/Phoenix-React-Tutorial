import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onRegisterUser() {
  yield takeEvery("USER_REGISTER", registerUser);
}

function* registerUser(action) {
  let userID = null
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ "user": { "name" : action.payload }}),
  }
  yield fetch('/api/users', requestParams).then(function (response) {
      if (!response.ok) {
        window.alert("Error: Could not register User");
      } else {
        return response.json().then(function (data) {
          userID = data.id.toString();
        });
      }
  });
  if (userID) {
    yield put(actions.setUserIdOnRegister(userID))
  }
}

export default [
  onRegisterUser
];

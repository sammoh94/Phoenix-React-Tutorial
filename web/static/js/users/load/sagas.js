import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "./actions";

function* onAllUsersGet() {
  yield takeEvery("GET_ALL_USERS", getAllUsers);
}

function* getAllUsers() {
  let users = []
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json" }
  }
  yield fetch("/api/users", requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not retrieve list of users");
    } else {
      return response.json().then(function (data) {
        users = data;
      });
    }
  });
  if (users) {
    yield put(actions.setUsers(users));
  }
}

function* deleteUser() {
  yield takeEvery("DELETE_USER", deleteGivenUser);
}

function* deleteGivenUser(action) {
  let userDeleted = false;
  const userId  = action.payload;
  const url     = "/api/users/"+userId;
  const requestParams = {
    method: "DELETE",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not delete user");
    } else {
      userDeleted = true;
      return response;
    }
  });
  if (userDeleted) {
    yield put(actions.userDeleted(userId));
  }
}

export default [
  onAllUsersGet,
  deleteUser
]

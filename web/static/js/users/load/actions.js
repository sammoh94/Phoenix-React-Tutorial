import types from "./types";

const loadUsers = function () {
  return {
    type: types.GET_ALL_USERS
  }
}

const deleteUser = function (userInfo) {
  return {
    type: types.DELETE_USER,
    payload: userInfo
  }
}

const setUsers = function (users) {
  return {
    type: types.SET_USERS,
    payload: users
  }
}

const userDeleted = function (user_id) {
  return {
    type: "USER_DELETED",
    payload: user_id
  }
}

export default {
  loadUsers,
  deleteUser,
  setUsers,
  userDeleted
}

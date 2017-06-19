import types from "./types";

const loginUser = function (user) {
  return {
    type: types.USER_LOGIN,
    payload: user
  }
}

const setUserIdOnLogin = function (user_id) {
  return {
    type: types.SET_USER_LOGIN_ID,
    payload: user_id
  }
}

export default {
  loginUser,
  setUserIdOnLogin
}

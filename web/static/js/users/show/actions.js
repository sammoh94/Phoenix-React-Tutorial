import types from "./types";

const getUser = function (user_id) {
  return {
    type: types.GET_USER,
    payload: user_id
  }
}

const setUser = function (userInfo) {
  return {
    type: types.SET_USER,
    payload: userInfo
  }
}

export default {
  getUser,
  setUser
}

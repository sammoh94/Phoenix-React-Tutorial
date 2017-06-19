import types from "./types";

const registerUser = function (user) {
  return {
    type: types.USER_REGISTER,
    payload: user
  }
}

const setUserIdOnRegister = function (user_id) {
  return {
    type: types.SET_USER_REGISTER_ID,
    payload: user_id
  }
}

export default {
  registerUser,
  setUserIdOnRegister
}

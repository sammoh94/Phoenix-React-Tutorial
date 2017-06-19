// LOGIN REDUCER
import { Map } from 'immutable';

const initialState = new Map({
  currentUser: "",
  currentUserID: ""
});

export default function login(state=initialState, action = {}) {
  if (action.type === "USER_LOGIN") {
    console.log("ACTION USER_LOGIN IN REDUCER");
    return state.set("currentUser", action.payload);
  } else if (action.type === "SET_USER_LOGIN_ID") {
    return state.set("currentUserID", action.payload);
  } else {
    return state;
  }
}

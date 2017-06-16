// REGISTER REDUCER
import { Map } from 'immutable';

const initialState = new Map({
  currentUser: "",
  currentUserID: ""
});

export default function register(state=initialState, action = {}) {
  if (action.type === "USER_REGISTER") {
    return state.set("currentUser", action.payload);
  } else if (action.type === "SET_USER_REGISTER_ID") {
    return state.set("currentUserID", action.payload);
  } else if (action.type === "RESET_STATE") {
    let new_state = state.set("currentUserID", "");
    new_state = new_state.set("currentUser", "");
    return new_state;
  } else {
    return state;
  }
}

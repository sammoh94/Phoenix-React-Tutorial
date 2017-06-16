import { Map } from 'immutable';

const initialState = new Map({
  currentUser: "",
  currentUserID: ""
})

export default function show(state=initialState, action={}) {
  if (action.type === "SET_USER") {
    return state.set("currentUser", action.payload.user.name)
  } else if (action.type === "GET_USER") {
    return state.set("currentUserID", action.payload)
  } else {
    return state
  }
}

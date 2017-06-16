import { Map } from "immutable";

const initialState = new Map({
  updated: false,
  submitted: false
});

export default function editTweet(state=initialState, action={}) {
  if (action.type === "UPDATE_TWEET") {
    return state.set("submitted", true)
  } else if (action.type === "TWEET_UPDATED") {
    return state.set("updated", action.payload)
  } else if (action.type === "RESET_STATE") {
    state = state.set("updated", false)
    state = state.set("submitted", false)
    return state
  } else {
    return state
  }
}

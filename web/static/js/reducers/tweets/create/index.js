import { Map } from "immutable";

const initialState = new Map({
  created: false
});

export default function createTweet(state=initialState, action={}) {
  if (action.type === "TWEET_CREATED") {
    return state.set("created", true);
  } else if (action.type === "RESET_STATE") {
    return initialState;
  } else {
    return state;
  }
}

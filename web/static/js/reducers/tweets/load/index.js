import { Map } from 'immutable';

const initialState = new Map({
  tweets: []
});

export default function userTweets(state=initialState, action={}) {
  if (action.type === "GET_USER_TWEETS") {
    return state
  } else if (action.type === "SET_USER_TWEETS") {
    return state.set("tweets", action.payload);
  } else if (action.type === "TWEET_DELETED") {
    console.log("tweet deleted");
    let updatedTweets = state.get("tweets");
    for (var i = 0; i < updatedTweets.length; i++) {
      if (updatedTweets[i].id.toString() === action.payload) {
        updatedTweets.splice(i, 1);
      }
    }
    console.log(updatedTweets);
    return state.set("tweets", updatedTweets);
  } else {
    return state
  }
}

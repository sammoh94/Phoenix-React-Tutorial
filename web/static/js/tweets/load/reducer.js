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
    const oldTweetsList = state.get("tweets");
    const updatedTweets = oldTweetsList.filter(tweet => tweet.id.toString() !== action.payload);
    return state.set("tweets", updatedTweets);
  } else {
    return state
  }
}

import createSelector from 'reselect';

export const getUserTweets = function (state) {
  return state.getIn(["tweets", "load", "tweets"])
}

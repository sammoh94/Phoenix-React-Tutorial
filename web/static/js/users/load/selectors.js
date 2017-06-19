import createSelector from 'reselect';

export const loadUsers = function (state) {
  return state.getIn(["users", "userLoad", "usersList"]);
}

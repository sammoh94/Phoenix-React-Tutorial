import { Map } from 'immutable';

const initialState = new Map({
  usersList: []
})

export default function allUsers(state=initialState, action={}) {
  if (action.type === "SET_USERS") {
    return state.set("usersList", action.payload.users)
  } if (action.type === "USER_DELETED") {
    console.log("deleted user", action.payload);
    let usersList = state.get("usersList");
    console.log(usersList);
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].id.toString() === action.payload) {
        usersList.splice(i, 1);
      }
    }
    console.log(usersList);
    return state.set("usersList", usersList);
  } else {
    return state
  }
}

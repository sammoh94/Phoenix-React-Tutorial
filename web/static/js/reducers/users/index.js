import { Map } from 'immutable';

const initialState = new Map({
  usersList: []
})

export default function allUsers(state=initialState, action={}) {
  if (action.type === "SET_USERS") {
    return state.set("usersList", action.payload.users)
  } if (action.type === "USER_DELETED") {
    console.log("deleted user", action.payload);
    const usersList = state.get("usersList");
    const newList = usersList.filter(user => user.id.toString() !== action.payload);
    return state.set("usersList", newList);
  } else {
    return state
  }
}

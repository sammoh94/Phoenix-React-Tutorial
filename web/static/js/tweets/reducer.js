import { combineReducers } from "redux-immutable";
import create from "./create/reducer";
import edit from "./edit/reducer";
import load from "./load/reducer";

export default combineReducers({
  create,
  edit,
  load
});

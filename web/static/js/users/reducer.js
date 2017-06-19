import { combineReducers } from "redux-immutable";
import login from "./login/reducer";
import register from "./register/reducer";
import show from "./show/reducer";
import userLoad from "./load/reducer";

export default combineReducers({
  login,
  register,
  show,
  userLoad
});

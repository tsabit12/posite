import { combineReducers } from "redux";
import session from "./reducers/session";
import source from "./reducers/source";

export default combineReducers({
     session,
     source
})
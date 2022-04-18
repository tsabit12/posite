import { SET_LOGGED_IN } from "../types";

export const setLoggedIn = (session) => dispatch => dispatch({
     type: SET_LOGGED_IN,
     session
})
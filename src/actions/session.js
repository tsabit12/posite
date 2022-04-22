import { SET_LOGGED_IN } from "../types";
import jwt_decode from "jwt-decode";

export const setLoggedIn = (token) => dispatch => {
     var { user } = jwt_decode(token);
     dispatch({
          type: SET_LOGGED_IN,
          session: { token, ...user }
     })
}
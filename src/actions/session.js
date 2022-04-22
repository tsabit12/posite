import { SET_LOGGED_IN } from "../types";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const setLoggedIn = (token) => dispatch => {
     var { user } = jwt_decode(token);

     axios.interceptors.request.use(function(config){
          config.headers["x-access-token"] = token;
          return config;
     })

     dispatch({
          type: SET_LOGGED_IN,
          session: { token, ...user }
     })
}
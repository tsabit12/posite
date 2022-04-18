import { SET_LOGGED_IN } from "../types";

export default function session(state={}, action={}){
     switch (action.type) {
          case SET_LOGGED_IN:
               return action.session;
          default:
               return state;
     }
}
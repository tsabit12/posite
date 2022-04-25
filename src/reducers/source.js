import { SET_SOURCE } from "../types";

export default function source(state = {}, action = {}) {
  switch (action.type) {
    case SET_SOURCE:
      return action.data;
    default:
      return state;
  }
}

import { SET_SOURCE } from "../types";

export const setSource = (data) => dispatch => dispatch({
     type: SET_SOURCE,
     data
})
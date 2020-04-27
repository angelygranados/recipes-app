import * as types from "./actionTypes";
import * as servingsApi from "../../api/servingsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadServingsSuccess(servings) {
  return { type: types.LOAD_SERVINGS_SUCCESS, servings };
}

export function loadServings() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return servingsApi
      .getServings()
      .then((servings) => {
        dispatch(loadServingsSuccess(servings));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

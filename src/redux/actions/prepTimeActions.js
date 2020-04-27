import * as types from "./actionTypes";
import * as prepTimeApi from "../../api/prepTimeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPrepTimeSuccess(prepTime) {
  return { type: types.LOAD_PREPTIME_SUCCESS, prepTime };
}

export function loadPrepTime() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return prepTimeApi
      .getPrepTime()
      .then((prepTime) => {
        dispatch(loadPrepTimeSuccess(prepTime));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

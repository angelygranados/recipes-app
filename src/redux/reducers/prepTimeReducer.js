import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function prepTimeReducer(state = initialState.prepTime, action) {
  switch (action.type) {
    case types.LOAD_PREPTIME_SUCCESS:
      return action.prepTime;
    default:
      return state;
  }
}

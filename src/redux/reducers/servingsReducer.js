import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function categoryReducer(state = initialState.servings, action) {
  switch (action.type) {
    case types.LOAD_SERVINGS_SUCCESS:
      return action.servings;
    default:
      return state;
  }
}

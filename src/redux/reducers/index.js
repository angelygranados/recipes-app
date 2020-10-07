import { combineReducers } from "redux";
import recipes from "./recipeReducer";
import categories from "./categoryReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  recipes,
  categories,
  apiCallsInProgress,
});

export default rootReducer;

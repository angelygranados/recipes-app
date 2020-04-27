import { combineReducers } from "redux";
import recipes from "./recipeReducer";
import categories from "./categoryReducer";
import servings from "./servingsReducer";
import prepTime from "./prepTimeReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  recipes,
  categories,
  servings,
  prepTime,
  apiCallsInProgress,
});

export default rootReducer;

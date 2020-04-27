import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/servings/";

export function getServings() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/prepTime/";

export function getPrepTime() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

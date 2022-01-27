import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://swapi.dev/api/starships/?format=json";

export async function getStarships() {
  return await fetch(baseUrl).then(handleResponse).catch(handleError);
}

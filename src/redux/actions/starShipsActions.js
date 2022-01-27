import * as types from "./actionTypes";
import * as starShipApi from "../../api/starShipsApi";

export function addPassengersToStarshipSuccess(starship) {
  return { type: types.ADD_PASSENGERS_TO_STARSHIP, starship };
}

export function removePassengersFromStarshipSuccess(starship) {
  return { type: types.REMOVE_PASSENGERS_FROM_STARSHIP, starship };
}

export function loadStarshipsSuccess(starships) {
  return { type: types.LOAD_STARSHIPS_SUCCESS, starships };
}

export function addPassengersToStarship(starship) {
  return function (dispatch) {
    dispatch(addPassengersToStarshipSuccess(starship));
  };
}

export function removePassengersFromStarship(starship) {
  return function (dispatch) {
    dispatch(removePassengersFromStarshipSuccess(starship));
  };
}

export const loadStarships = () => {
  return (dispatch) => {
    starShipApi.getStarships().then((data) => {
      let result = data.results;
      dispatch({
        type: types.LOAD_STARSHIPS_SUCCESS,
        result,
      });
    });
  };
};

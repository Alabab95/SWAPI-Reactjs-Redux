import * as types from "./actionTypes";

export function addStarshipToFleetSuccess(starship) {
  return { type: types.ADD_STARSHIP_TO_FLEET, starship };
}

export function removeStarshipFromFleetSuccess(starship) {
  return { type: types.REMOVE_STARSHIP_FROM_FLEET, starship };
}

export function addStarshipToFleet(starship) {
  return function (dispatch) {
    dispatch(addStarshipToFleetSuccess(starship));
  };
}

export function removeStarshipFromFleet(starship) {
  return function (dispatch) {
    dispatch(removeStarshipFromFleetSuccess(starship));
  };
}

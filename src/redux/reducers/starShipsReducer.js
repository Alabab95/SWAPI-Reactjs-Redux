import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function starShipsReducer(state = initialState.starShips, action) {
  switch (action.type) {
    case types.LOAD_STARSHIPS_SUCCESS:
      return [...state, { ...action.result }];
    case types.ADD_PASSENGERS_TO_STARSHIP:
      for (var key in state[0]) {
        let currentStarship = state[0][key];
        if (currentStarship.name == action.starship.name) {
          if (currentStarship.passengers < currentStarship.cargo_capacity)
            currentStarship.passengers =
              parseInt(currentStarship.passengers) + 1;
        }
      }
      return [...state];
    case types.REMOVE_PASSENGERS_FROM_STARSHIP:
      for (var key in state[0]) {
        let currentStarship = state[0][key];
        if (currentStarship.name == action.starship.name) {
          if (currentStarship.passengers > 0)
            currentStarship.passengers =
              parseInt(currentStarship.passengers) - 1;
        }
      }
      return [...state];
    default:
      return state;
  }
}

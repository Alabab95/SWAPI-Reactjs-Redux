import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function fleetReducer(state = initialState.fleet, action) {
  switch (action.type) {
    case types.ADD_STARSHIP_TO_FLEET:
      return [...state, JSON.parse(action.starship)];
    case types.REMOVE_STARSHIP_FROM_FLEET:
      let result = state.filter((item) => item.name !== action.starship.name);
      return [...result];
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import { fleetReducer as fleet } from "./fleetReducer";
import { starShipsReducer as starShips } from "./starShipsReducer";

const rootReducer = combineReducers({
  fleet,
  starShips,
});

export default rootReducer;

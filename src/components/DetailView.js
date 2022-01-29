import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPassengersToStarship,
  removePassengersFromStarship,
} from "../redux/actions/starShipsActions";

function DetailView() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { object } = location.state;
  const starShips = useSelector((state) => state.starShips);
  const [starship, setStarship] = useState([]);

  useEffect(() => {
    for (var key in starShips[0]) {
      if (starShips[0][key].name === object.name) {
        object.passengers = starShips[0][key].passengers;
        setStarship(starShips[0][key]);
      }
    }
  }, [starShips, object, starship]);

  const addPassenger = () => {
    dispatch(addPassengersToStarship(object));
  };
  const removePassenger = () => {
    dispatch(removePassengersFromStarship(object));
  };
  return (
    <div>
      <h5>Name : {starship.name}</h5>
      <p>Model : {starship.model}</p>
      <p>Starship class : {starship.starship_class}</p>
      <p>Number of passengers : {starship.passengers}</p>
      <button onClick={addPassenger}>+</button>
      <button onClick={removePassenger}>-</button>
    </div>
  );
}

export default DetailView;

import React, { useState, useEffect } from "react";
import Fleet from "./Fleet";
import Search from "./Search";

import { loadStarships } from "../redux/actions/starShipsActions";
import { useSelector, useDispatch } from "react-redux";

function FleetManager() {
  const [listStarshipsName, setListStarshipsName] = useState([]);

  const starships = useSelector((state) => state.starShips);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStarships());
  }, []);

  useEffect(() => {
    console.log("dispatching");
    console.log("store ", starships[0]);
    let result = [];

    if (starships && starships.length > 0) {
      for (var key in starships[0]) {
        result.push(starships[0][key]);
      }
      console.log("result ", result);

      setListStarshipsName([...result]);
    }
  }, [starships]);

  return (
    <div>
      fleet manager
      <Search options={listStarshipsName} />
      <Fleet />
    </div>
  );
}

export default FleetManager;

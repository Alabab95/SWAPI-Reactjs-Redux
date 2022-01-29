import React, { useState, useEffect } from "react";
import Fleet from "./Fleet";
import Search from "./Search";

import Grid from "@material-ui/core/Grid";

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
    let result = [];

    if (starships && starships.length > 0) {
      for (var key in starships[0]) {
        result.push(starships[0][key]);
      }
      setListStarshipsName([...result]);
    }
  }, [starships]);

  return (
    <div>
      <h1>Star Fleet Manager</h1>
      <Grid container spacing={8}>
        <Grid item xs={8} sm={7}>
          <Search options={listStarshipsName} />
        </Grid>
        <Grid item xs={6} sm={5}>
          <Fleet />
        </Grid>
      </Grid>
    </div>
  );
}

export default FleetManager;

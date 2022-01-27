import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StarshipDisplay from "./StarshipDisplay";

function Fleet() {
  const fleet = useSelector((state) => state.fleet);
  const [listOfStarships, setListOfStarships] = useState([]);
  useEffect(() => {
    setListOfStarships(fleet);
  }, [fleet]);
  return (
    listOfStarships &&
    listOfStarships.map((s, idx) => {
      return <StarshipDisplay key={idx} info={s} />;
    })
  );
}

export default Fleet;

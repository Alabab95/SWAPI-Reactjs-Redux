import React from "react";
import { useDispatch } from "react-redux";
import { addStarshipToFleet } from "../redux/actions/fleetActions";

function Search({ options }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);

    dispatch(addStarshipToFleet(e.target.value));
  };
  return (
    <select onChange={handleChange}>
      {options &&
        options.map((option, idx) => {
          return (
            <option key={idx} value={JSON.stringify(option)}>
              {option.name}
            </option>
          );
        })}
    </select>
  );
}

export default Search;

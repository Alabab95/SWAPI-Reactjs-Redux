import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeStarshipFromFleet } from "../redux/actions/fleetActions";
import Button from "react-bootstrap/Button";

function StarshipDisplay({ info }) {
  const dispatch = useDispatch();

  const removeStarship = () => {
    dispatch(removeStarshipFromFleet(info));
  };
  useEffect(() => {}, [info]);
  return (
    <div>
      <Button className="btn btn-primary" onClick={removeStarship}>
        Remove
      </Button>
      <Link to="/detail" state={{ object: info }}>
        Edit
      </Link>

      <div>{info.name}</div>
      <div>{info.passengers}</div>
    </div>
  );
}

export default StarshipDisplay;

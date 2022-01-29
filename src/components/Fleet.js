import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StarshipDisplay from "./StarshipDisplay";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: 0,
  },
  title: {
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    fontSize: "1em",
  },
}));
function Fleet() {
  const classes = useStyles();

  const fleet = useSelector((state) => state.fleet);
  const [listOfStarships, setListOfStarships] = useState([]);
  useEffect(() => {
    setListOfStarships(fleet);
  }, [fleet]);
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Fleet
        </Typography>
        <List>
          {listOfStarships &&
            listOfStarships.map((s, idx) => {
              return <StarshipDisplay key={idx} info={s} />;
            })}
        </List>
      </Paper>
    </div>
  );
}

export default Fleet;

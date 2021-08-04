import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  box: {
    backgroundColor: "green",
  },
}));
export default function Title(props) {
  const classes = useStyles();
  return <box className={classes.box}></box>;
}

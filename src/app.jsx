import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { TrackList } from "./track/TrackList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Application = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main>
        <TrackList />
      </main>
    </div>
  );
};

const app = <Application />;

ReactDOM.render(app, document.getElementById("app"));

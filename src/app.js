import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const app = (
  <React.Fragment>
    <CssBaseline />
    <Container>
      <Typography>Hello World</Typography>
    </Container>
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById("app"));

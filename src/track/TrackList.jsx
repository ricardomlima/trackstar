import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TrackList = () => {
  const tracks = [
    { artists: [{ name: "Black Loops" }], title: "JAH Love" },
    { artists: [{ name: "Felipe Gordon" }], title: "Rio" },
    {
      artists: [{ name: "Cody Currie" }, { name: "Joel Holmes" }],
      title: "Shitz Cool",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell align="right">Artists</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => (
            <TableRow key={track.title}>
              <TableCell component="th" scope="row">
                {track.title}
              </TableCell>
              <TableCell align="right">
                {track.artists.map((item) => item.name).join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { TrackList };

import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import data from "./data";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  matchCard: {
    width: 350,
  },
  table: {
    width: 300,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
    backgroundColor: "#0F8A5F",
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledCard = withStyles((theme) => ({
  root: {
    backgroundColor: "#0F8A5F",
  },
}))(Card);

const GetTeamStats = (players, teamId, attr) => {
  let toBeReturned = 0;
  let teammates = players.filter((item) => item.team === teamId);
  teammates.forEach((element) => (toBeReturned = toBeReturned + element[attr]));
  return toBeReturned;
};

const GetTeamName = (players, teamId) => {
  let teammates = players.filter((item) => item.team === teamId);
  let isPfl = teammates.find((element) => element.username === "PFL");
  if (isPfl) return "Team PFL";
  return "Team Xantic";
};

const Matches = () => {
  const classes = useStyles();
  const [matches] = useState(data);
  const listItems = matches.map((match, index) => (
    <Grid item className={classes.matchCard}>
      <StyledCard>
        <CardMedia
          className={classes.media}
          image={"map-" + match.gather.map_id + ".jpg"}
          title="Map icon"
        />
        <CardContent>
          <Typography variant="overline" display="block" gutterBottom>
            Matchens-lirare:{" "}
            <b>
              {
                match.players.find((item) => item.id === match.mvp_user_id)
                  .username
              }
            </b>{" "}
            ({match.players.find((item) => item.id === match.mvp_user_id).score})
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    <b>{GetTeamName(match.players, 1)}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamName(match.players, 2)}</b>
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow key="rounds">
                  <StyledTableCell align="center">
                    <b>{match.team1_score}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>-</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{match.team2_score}</b>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow key="kills">
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 1, "kills")}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">Kills</StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 2, "kills")}</b>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow key="headshots">
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 1, "headshots")}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">Headshots</StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 2, "headshots")}</b>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow key="deaths">
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 1, "deaths")}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">Deaths</StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 2, "deaths")}</b>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow key="clutches">
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 1, "clutches")}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">Clutches</StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 2, "clutches")}</b>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow key="bombplants">
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 1, "bomb_plants")}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">Plants</StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 2, "bomb_plants")}</b>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow key="bombdefuse">
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 1, "bomb_defuses")}</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">Defuse</StyledTableCell>
                  <StyledTableCell align="center">
                    <b>{GetTeamStats(match.players, 2, "bomb_defuses")}</b>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="overline" display="block" gutterBottom>
            varaktighet: {Math.trunc(match.duration / 60)} minuter
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  ));

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {listItems}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Matches;

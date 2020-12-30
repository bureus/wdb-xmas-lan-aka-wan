import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import data from "./data";
import { makeStyles } from "@material-ui/core/styles";

import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles({
  statGrid: {
    backgroundColor: "#0F8A5F",
    color: "#FFF",
  }
});

const columns = [
  { field: "player", headerName: "Player" },
  { field: "kills", headerName: "Kills" },
  { field: "deaths", headerName: "Deaths" },
  { field: "kd", headerName: "K/D" },
  { field: "assists", headerName: "Assists" },
  { field: "headshots", headerName: "HS %" },
  { field: "openingKills", headerName: "Opening frags" },
  { field: "openingDeaths", headerName: "Opening deaths" },
  { field: "clutches", headerName: "Clutches" },
  { field: "avrgScore", headerName: "Avrg score" },
  { field: "bombPlants", headerName: "Plants" },
  { field: "bombDefuses", headerName: "Defuses" },
  { field: "team", headerName: "Team" },
];

const PlayerStatistics = () => {
  const classes = useStyles();
  const [matches] = useState(data);
  let players = matches[0].players;
  let rows = [];
  players.forEach((player, index) => {
    let row = {
      id: index,
      player: player.username,
      kills: 0,
      deaths: 0,
      assists: 0,
      headshots: 0,
      openingKills: 0,
      openingDeaths: 0,
      clutches: 0,
      avrgScore: 0,
      bombPlants: 0,
      bombDefuses: 0,
      team: player.team === 1 ? "Team PFL" : "Team Xantic",
    };
    matches.forEach((match) => {
      let matchStat = match.players.find(
        (element) => element.username === player.username
      );
      row.kills = row.kills + matchStat.kills;
      row.deaths = row.deaths + matchStat.deaths;
      row.assists = row.assists + matchStat.assists;
      row.headshots = row.headshots + matchStat.headshots;
      row.openingKills = row.openingKills + matchStat.opening_kills;
      row.openingDeaths = row.openingDeaths + matchStat.opening_deaths;
      row.clutches = row.clutches + matchStat.clutches;
      row.avrgScore = row.avrgScore + matchStat.score;
      row.bombPlants = row.bombPlants + matchStat.bomb_plants;
      row.bombDefuses = row.bombDefuses + matchStat.bomb_defuses;
    });
    row.avrgScore = Math.trunc(row.avrgScore / 6);
    row.kd = (row.kills / row.deaths).toFixed(2);
    row.headshots = ((row.headshots / row.kills) * 100).toFixed(2);
    rows.push(row);
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} className={classes.statGrid}/>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlayerStatistics;

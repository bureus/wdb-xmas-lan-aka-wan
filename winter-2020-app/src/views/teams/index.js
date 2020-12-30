import React, { useState } from "react";
import {makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "./profileCard";
import data from "./data";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  playerCard: {
    width: 200,
  },
  table: {
    width: 300,
  },
});

const GetTeamMates = (players, teamId) => {
  let toBeReturned = [];
  let teammates = players.filter((item) => item.team === teamId);
  teammates.forEach((element) =>
    toBeReturned.push({
      username: element.username,
      id: element.id,
      avatarHash: element.avatar_hash,
      elo: element.elo,
      totKills: element.total_kills,
      totDeaths: element.total_deaths,
    })
  );
  return toBeReturned;
};

const GetTeamScore = (teamName, matches) => {
  let score = 0;
  let capUserId = teamName === "Team PFL" ? 37128763 : 95747;
  matches.forEach(element => {
      let winningTeam = element.team1_score > element.team2_score ? 1 : 2;
      if(element.players.find(player => player.id === capUserId).team === winningTeam)
        score = score+1;
  });
  return score;
}

const Teams = ({ teamId, teamName, ...rest }) => {
  const classes = useStyles();
  const [matches] = useState(data);
  let teammates = GetTeamMates(matches[0].players, teamId);
  const listPlayers = teammates.map((player, index) => (
    <Grid item className={classes.playerCard}>
      <ProfileCard
        userName={player.username}
        avatarHash={player.avatarHash}
        elo={player.elo}
        totKills={player.totKills}
        totDeaths={player.totDeaths}
        teamName={teamName}
      />
    </Grid>
  ));

  return (
      <Grid item xs={6}>
        <div className="xmasScore">
          {GetTeamScore(teamName, matches)}
        </div>
        <Grid container justify="center" spacing={2}>
          {listPlayers}
        </Grid>
      </Grid>
  );
};

Teams.propTypes = {
  teamId: PropTypes.string,
  teamName: PropTypes.string,
};

export default Teams;

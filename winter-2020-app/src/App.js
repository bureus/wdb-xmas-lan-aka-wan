import Snowfall from "react-snowfall";
import Matches from "./views/matches/index";
import Teams from "./views/teams/index";
import Hero from "./views/hero/index";
import PlayerStatistics from "./views/playerstatistics/index";
import "./App.css";
import { Container, Divider, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Snowfall snowflakeCount={300} />
      <Hero />
      <Container className="bodyContainer">
        <div className="xmasHeader">Wedemboys jultunering 2020</div>
        <Grid container spacing={2}>
          <Teams teamId="1" teamName="Team PFL" />
          <Teams teamId="2" teamName="Team Xantic" />
        </Grid>
        <div className="xmasHeader">Matcher</div>
        <Matches />
        <div className="xmasHeader">Statistik</div>
        <PlayerStatistics/>
      </Container>
    </div>
  );
}

export default App;

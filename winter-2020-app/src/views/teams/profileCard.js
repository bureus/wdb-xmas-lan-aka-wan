import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import PropTypes from "prop-types";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 145,
    textAlign: "center",
    backgroundColor: "#235E6F",
    color: "#fff",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[400],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[400],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  splitDivider: {
    backgroundColor: "rgba(255, 250, 250, 0.10)",
  },
}));

const ProfileCard = ({
  userName,
  avatarHash,
  elo,
  totKills,
  totDeaths,
  teamName,
  ...rest
}) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(255, 250, 250, 0.10)",
    height: "50%",
  });
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <Avatar
          className={styles.avatar}
          src={
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/" +
            avatarHash.substr(0, 2) +
            "/" +
            avatarHash +
            "_medium.jpg"
          }
        />
        <h3 className={styles.heading}>{userName}</h3>
        <span className={styles.subheader}>{teamName}</span>
      </CardContent>
      <Divider className={styles.splitDivider} />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>ELO</p>
          <p className={styles.statValue}>{elo ? elo : "NA"}</p>
        </Box>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>K/D-KVOT</p>
          <p className={styles.statValue}>
            {(totKills / totDeaths).toFixed(2)}
          </p>
        </Box>
      </Box>
    </Card>
  );
};

ProfileCard.propTypes = {
  userName: PropTypes.string,
  avatarHash: PropTypes.string,
  elo: PropTypes.string,
  totKills: PropTypes.string,
  totDeaths: PropTypes.string,
  teamName: PropTypes.string,
};

export default ProfileCard;

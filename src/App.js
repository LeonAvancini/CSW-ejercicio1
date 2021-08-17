import Home from "./Pages/Home";
import EllisePicture from "./assets/Ellipse.png";
import { Grid, Typography } from "@material-ui/core";
import SignalCellular3BarIcon from "@material-ui/icons/SignalCellular3Bar";
import SignalWifi4BarIcon from "@material-ui/icons/SignalWifi4Bar";
import Battery90Icon from "@material-ui/icons/Battery90";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "14px 21px 0px 21px",
  },
  icon: {
    margin: "3px",
  },
}));

function App() {
  const classes = useStyles();

  const profile = {
    userImage: EllisePicture,
    userName: "Jane",
    city: "San Francisco, CA",
  };
  const date = new Date();
  var time = date.getHours() + ":" + date.getMinutes();
  return (
    <>
      <Grid
        container
        alignItem="center"
        justifyContent="space-between"
        className={classes.root}
      >
        <Grid item lg={3}>
          <Typography variant="h6" color="primary">
            {time}
          </Typography>
        </Grid>
        <Grid item lg={9}>
          <SignalCellular3BarIcon className={classes.icon} />
          <SignalWifi4BarIcon className={classes.icon} />
          <Battery90Icon
            className={classes.icon}
            style={{ transform: "rotate(90deg)" }}
          />
        </Grid>
      </Grid>
      <Home userInfo={profile} />
    </>
  );
}

export default App;

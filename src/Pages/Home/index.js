import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider } from "@material-ui/core";
import ProfileInformation from "../../components/ProfileInformation";
import ProfilePicture from "../../components/ProfilePicture";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";

const useStyles = makeStyles(() => ({
  profileImageContainer: {
    marginTop: "47px",
  },
  Button: {
    margin: "auto",
    marginTop: "16px",
    width: "343px",
  },
}));

export const Home = ({ userInfo }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignContent="center">
      <Grid item lg={12} className={classes.profileImageContainer}>
        <ProfilePicture
          image={userInfo.userImage}
          userName={userInfo.userName}
        />
      </Grid>
      <ProfileInformation name={userInfo.userName} city={userInfo.city} />
      <Button variant="contained" color="primary" className={classes.Button}>
        {`FOLLOW ${userInfo.userName}`}
      </Button>
      <Button variant="outlined" color="primary" className={classes.Button}>
        MESSAGE
      </Button>
      <Gallery />
      <Button variant="outlined" color="primary" className={classes.Button}>
        SEE MORE
      </Button>
      \
      <Divider />
      <NavBar />
    </Grid>
  );
};

export default Home;

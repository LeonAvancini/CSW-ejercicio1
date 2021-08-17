import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";

const useStyles = makeStyles(() => ({
  root: {
    margin: "23px",
  },
  plusIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "70px",
    height: "40px",
    borderRadius: "20px",
    background: "linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)",
    border: "none",
    cursor: "pointer",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Button>
        <HomeOutlinedIcon />
      </Button>
      <Button>
        <SearchOutlinedIcon />
      </Button>
      <button className={classes.plusIconContainer}>
        <AddOutlinedIcon />
      </button>
      <Button>
        <ChatBubbleOutlineOutlinedIcon />
      </Button>
      <Button>
        <PersonOutlinedIcon />
      </Button>
    </Grid>
  );
};

export default NavBar;

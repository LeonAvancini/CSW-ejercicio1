import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  image: {
    margin: "auto",
    width: "128px",
    height: "128px",
  },
}));
export const ProfilePicture = ({ image, userName }) => {
  const classes = useStyles();
  return (
    <>
      <Avatar alt={userName} src={image} className={classes.image} />
    </>
  );
};

export default ProfilePicture;

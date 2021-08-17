import Typography from "@material-ui/core/Typography";

export const ProfileInformation = ({ name, city }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "16px",
      }}
    >
      <Typography variant="h5" color="initial">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="initial">
        {city}
      </Typography>
    </div>
  );
};

export default ProfileInformation;

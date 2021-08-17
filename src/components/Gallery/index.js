import { ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "16px",
    marginTop: "32px",
  },
  imageList: {
    transform: "translateZ(0)",
  },
}));

export const Gallery = () => {
  const classes = useStyles();
  const images = [
    { img: image1, featured: false },
    { img: image2, featured: false },
    { img: image3, featured: false },
    { img: image4, featured: false },
    { img: image5, featured: false },
    { img: image6, featured: false },
  ];
  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={9} className={classes.imageList}>
        {images.map((image) => (
          <ImageListItem
            key={image.img}
            cols={image.featured ? 2 : 1}
            rows={image.featured ? 2 : 1}
          >
            <img src={image.img} alt={image.img} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;

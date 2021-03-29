import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const FeaturedManga = ({ manga }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {manga.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Chapter 420
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              title={manga.name}
              image="https://source.unsplash.com/random"
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

FeaturedManga.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    artist: PropTypes.string,
    status: PropTypes.string,
    demographic: PropTypes.string,
    isHentai: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
};

export default FeaturedManga;

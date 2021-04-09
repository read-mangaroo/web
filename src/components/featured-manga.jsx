import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { CORE_MANGA_FIELDS } from "../types";

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
      <Link href={`/manga/${manga.id}`} passHref>
        <CardActionArea component="a">
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
                image={manga.coverArtUrl}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
};

FeaturedManga.propTypes = {
  manga: CORE_MANGA_FIELDS.isRequired,
};

export default FeaturedManga;

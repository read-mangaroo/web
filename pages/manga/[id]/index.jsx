import PropTypes from "prop-types";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import App from "../../../src/components/layout";
import ChapterList from "./chapter_list";
import { addApolloState, initializeApollo } from "../../../src/apollo-client";
import { GET_MANGA } from "../../../src/graph/queries";
import { CORE_CHAPTER_FIELDS } from "../../../src/types";

const useStyles = makeStyles((theme) => ({
  descriptor: {
    fontWeight: 500,
  },
  coverImage: {
    width: "100%",
  },
  detailsSection: {
    marginBottom: theme.spacing(3),
  },
  sideSection: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  sideSectionContent: {
    padding: theme.spacing(2),
  },
  sideSectionTitle: {
    marginBottom: theme.spacing(1),
  },
}));

const MangaShowPage = ({ manga }) => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const detailSections = [
    { descriptor: "Manga ID", value: manga.id },
    { descriptor: "Name", value: manga.name },
    { descriptor: "Author", value: manga.author },
    { descriptor: "Artist", value: manga.artist },
    { descriptor: "Publish Status", value: manga.status },
    { descriptor: "Demographic", value: manga.demographic },
    { descriptor: "Description", value: manga.description },
  ];

  return (
    <App>
      <Head>
        <title>{manga.name} - Mangaroo</title>
      </Head>
      <main>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Container maxWidth="md">
              <img
                className={classes.coverImage}
                src={manga.coverArtUrl}
                alt={manga.name}
              />
            </Container>
            <Container>
              <Paper elevation={3} className={classes.sideSection}>
                <div className={classes.sideSectionContent}>
                  <Typography variant="h6" className={classes.sideSectionTitle}>
                    Actions
                  </Typography>
                  <NextLink href={`/chapters/new?manga_id=${id}`} passHref>
                    <Button component={Link} variant="outlined">
                      Upload New Chapter
                    </Button>
                  </NextLink>
                </div>
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.detailsSection}>
              <TableContainer component={Paper}>
                <Table aria-label="Manga Details">
                  <TableBody>
                    {detailSections.map((section) => (
                      <TableRow key={section.descriptor}>
                        <TableCell className={classes.descriptor}>
                          {section.descriptor}
                        </TableCell>
                        <TableCell align="left">{section.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <ChapterList chapters={manga.chapters} />
          </Grid>
        </Grid>
      </main>
    </App>
  );
};

MangaShowPage.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    demographic: PropTypes.string.isRequired,
    isHentai: PropTypes.bool.isRequired,
    description: PropTypes.string,
    coverArtUrl: PropTypes.string,
    chapters: PropTypes.arrayOf(CORE_CHAPTER_FIELDS),
  }).isRequired,
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const apolloClient = initializeApollo();

  const result = await apolloClient.query({
    query: GET_MANGA,
    variables: {
      id,
    },
  });

  if (result.data.manga === null) {
    return { notFound: true };
  }

  return addApolloState(apolloClient, {
    props: {
      manga: result.data.manga,
    },
  });
};

export default MangaShowPage;

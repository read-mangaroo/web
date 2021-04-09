import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import App from "../../src/components/layout";
import { addApolloState, initializeApollo } from "../../src/apollo-client";
import { GET_MANGA } from "../../src/graph/queries";
import { CORE_MANGA_FIELDS } from "../../src/types";

const useStyles = makeStyles({
  descriptor: {
    fontWeight: 500,
  },
  coverImage: {
    width: "100%",
  },
});

const MangaShowPage = ({ manga }) => {
  const classes = useStyles();

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
          <Grid item xs={12} md={3}>
            <Container maxWidth="md">
              <img
                className={classes.coverImage}
                src={manga.coverArtUrl}
                alt={manga.name}
              />
            </Container>
          </Grid>
          <Grid item xs={12} md={9}>
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
          </Grid>
        </Grid>
      </main>
    </App>
  );
};

MangaShowPage.propTypes = {
  manga: CORE_MANGA_FIELDS.isRequired,
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

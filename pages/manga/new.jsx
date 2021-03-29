import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import App from "../../src/components/layout";
import MangaForm from "../../src/components/manga-form";
import { CREATE_MANGA } from "../../src/graph/mutation";
import { LIST_MANGAS } from "../../src/graph/queries";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
}));

const MangaCreatePage = () => {
  const classes = useStyles();
  const router = useRouter();

  const onCompleted = () => {
    router.push("/");
  };

  const update = (cache, { data: { createManga } }) => {
    const { mangas } = cache.readQuery({ query: LIST_MANGAS });
    cache.writeQuery({
      query: LIST_MANGAS,
      data: {
        mangas: [...mangas, createManga],
      },
    });
  };

  const [createManga] = useMutation(CREATE_MANGA, {
    onCompleted,
    update,
  });

  return (
    <App>
      <Head>
        <title>Add New Manga - Mangaroo</title>
      </Head>
      <Container className={classes.container} maxWidth="lg">
        <MangaForm operation={createManga} />
      </Container>
    </App>
  );
};

export default MangaCreatePage;

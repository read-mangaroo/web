import Head from "next/head";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import App from "../../../src/components/layout";
import ChapterForm from "./form";
import { CREATE_CHAPTER } from "../../../src/graph/mutation";
import { GET_MANGA } from "../../../src/graph/queries";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
}));

const ChapterCreatePage = () => {
  const classes = useStyles();

  return (
    <App>
      <Head>
        <title>Add New Chapter - Mangaroo</title>
      </Head>
      <Container className={classes.container} maxWidth="lg">
        <FormSection />
      </Container>
    </App>
  );
};

const FormSection = () => {
  const router = useRouter();
  const params = router.query;

  const onCompleted = ({ createChapter }) => {
    router.push(`/manga/${createChapter.mangaId}`);
  };

  const update = (cache, { data: { createChapter } }) => {
    const { manga } = cache.readQuery({
      query: GET_MANGA,
      variables: {
        id: createChapter.mangaId,
      },
    });

    if (manga) {
      cache.writeQuery({
        query: GET_MANGA,
        variables: {
          id: createChapter.mangaId,
        },
        data: {
          manga: {
            chapters: [createChapter, ...manga.chapters],
          },
        },
      });
    }
  };

  const [createChapter] = useMutation(CREATE_CHAPTER, {
    onCompleted,
    update,
  });

  const mangaQuery = gql`
    query GetMangas {
      mangas {
        id
        name
      }
    }
  `;
  const { loading, data } = useQuery(mangaQuery);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <ChapterForm
        operation={createChapter}
        mangas={data.mangas}
        mangaId={params?.manga_id}
      />
    </>
  );
};

export default ChapterCreatePage;

import React from "react";
import { useQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import { LIST_MANGAS } from "../graph/queries";
import FeaturedManga from "./featured-manga";

const MangaList = () => {
  const { loading, error, data } = useQuery(LIST_MANGAS);

  if (error) return <div>Error loading stuff</div>;

  if (loading) return <div>Loading</div>;

  return (
    <Grid container spacing={4}>
      {data.mangas.map((manga) => (
        <FeaturedManga key={manga.id} manga={manga} />
      ))}
    </Grid>
  );
};

export default MangaList;

import React from "react";
import { useQuery } from "@apollo/client";
import { LIST_MANGAS } from "../graph/queries";
import styles from "../../styles/Home.module.css";

const MangaList = () => {
  const { loading, error, data } = useQuery(LIST_MANGAS);

  if (error) return <div>Error loading stuff</div>;

  if (loading) return <div>Loading</div>;

  return (
    <div className={styles.grid}>
      {data?.mangas.map((manga) => (
        <div key={manga.id} className={styles.card}>
          <h3>{manga.name}</h3>
          <p>Author: {manga.author}</p>
          <p>Description: {manga.description}</p>
          <p>Artist: {manga.artist}</p>
          <p>Status: {manga.status}</p>
          <p>Demographic: {manga.demographic}</p>
          <p>Is Hentai: {manga.isHentai}</p>
        </div>
      ))}
    </div>
  );
};

export default MangaList;

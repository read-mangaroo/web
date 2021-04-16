import { gql } from "@apollo/client";
import { CORE_MANGA_FIELDS } from "./fragments";

export const GET_CHAPTER = gql`
  query GetChapter($id: ID!) {
    chapter(id: $id) {
      id
      name
      insertedAt
    }
  }
`;

export const LIST_MANGAS = gql`
  ${CORE_MANGA_FIELDS}
  query ListMangas {
    mangas {
      ...CoreMangaFields
    }
  }
`;

export const GET_MANGA = gql`
  ${CORE_MANGA_FIELDS}
  query GetManga($id: ID!) {
    manga(id: $id) {
      ...CoreMangaFields
      chapters {
        id
        name
        insertedAt
      }
    }
  }
`;

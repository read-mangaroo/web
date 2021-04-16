import { gql } from "@apollo/client";
import { CORE_MANGA_FIELDS } from "./fragments";

export const CREATE_CHAPTER = gql`
  mutation CreateChapter($input: CreateChapterInput!) {
    createChapter(input: $input) {
      id
      name
      mangaId
    }
  }
`;

export const CREATE_MANGA = gql`
  ${CORE_MANGA_FIELDS}
  mutation CreateManga($input: CreateMangaInput!) {
    createManga(input: $input) {
      ...CoreMangaFields
    }
  }
`;

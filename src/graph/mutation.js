/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";
import { CORE_MANGA_FIELDS } from "./fragments";

export const CREATE_MANGA = gql`
  ${CORE_MANGA_FIELDS}
  mutation CreateManga($input: CreateMangaInput!) {
    createManga(input: $input) {
      ...CoreMangaFields
    }
  }
`;

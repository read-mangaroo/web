/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const CREATE_MANGA = gql`
  mutation CreateManga($input: CreateMangaInput!) {
    createManga(input: $input) {
      id
      name
      author
      artist
      status
      demographic
      isHentai
      description
    }
  }
`;

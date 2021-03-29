/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const LIST_MANGAS = gql`
  query ListMangas {
    mangas {
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

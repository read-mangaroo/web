/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const CORE_MANGA_FIELDS = gql`
  fragment CoreMangaFields on Manga {
    id
    name
    author
    artist
    status
    demographic
    isHentai
    description
    coverArtUrl
  }
`;

/* eslint-disable import/prefer-default-export */
import PropTypes from "prop-types";

export const CORE_MANGA_FIELDS = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  artist: PropTypes.string,
  status: PropTypes.string,
  demographic: PropTypes.string,
  isHentai: PropTypes.bool,
  description: PropTypes.string,
  coverArtUrl: PropTypes.string,
});

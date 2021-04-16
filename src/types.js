import PropTypes from "prop-types";

export const CORE_CHAPTER_FIELDS = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mangaId: PropTypes.string,
  insertedAt: PropTypes.string.isRequired,
});

export const CORE_MANGA_FIELDS = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  demographic: PropTypes.string.isRequired,
  isHentai: PropTypes.bool.isRequired,
  description: PropTypes.string,
  coverArtUrl: PropTypes.string,
});

import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CORE_CHAPTER_FIELDS } from "../../../src/types";

const MangaChapterList = ({ chapters }) => {
  return (
    <Grid container spacing={1}>
      <TableContainer component={Paper}>
        <Table aria-label="Chapter List">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chapters.map((chapter) => {
              return (
                <TableRow key={chapter.id}>
                  <TableCell>{chapter.name}</TableCell>
                  <TableCell>{chapter.insertedAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

MangaChapterList.propTypes = {
  chapters: PropTypes.arrayOf(CORE_CHAPTER_FIELDS).isRequired,
};

export default MangaChapterList;

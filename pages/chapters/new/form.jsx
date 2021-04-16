import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  name: yup.string().required(),
  mangaId: yup.number().required(),
});

const useStyles = makeStyles((theme) => ({
  formField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ChapterForm = ({ operation, mangas, mangaId }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      mangaId: parseInt(mangaId, 10),
    },
    validationSchema,
    onSubmit: (values) => {
      operation({ variables: { input: values } });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        variant="outlined"
        className={classes.formField}
      />
      <Autocomplete
        fullWidth
        id="mangaId"
        name="mangaId"
        options={mangas}
        defaultValue={mangas.find((manga) => {
          return parseInt(manga.id, 10) === formik.values.mangaId;
        })}
        getOptionLabel={(manga) => manga.name}
        getOptionSelected={(option, value) => option.mangaId === value.mangaId}
        onChange={(_event, manga) => {
          formik.setFieldValue("mangaId", manga?.id);
        }}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label="Manga"
            variant="outlined"
            value={formik.values.mangaId}
            error={formik.touched.mangaId && Boolean(formik.errors.mangaId)}
            helperText={formik.touched.mangaId && formik.errors.mangaId}
            className={classes.formField}
          />
        )}
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        className={classes.formField}
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

ChapterForm.propTypes = {
  operation: PropTypes.func.isRequired,
  mangas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  mangaId: PropTypes.string,
};

ChapterForm.defaultProps = {
  mangaId: null,
};

export default ChapterForm;

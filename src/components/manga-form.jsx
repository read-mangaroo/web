import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  name: yup.string().required(),
  author: yup.string().required(),
  artist: yup.string().required(),
  status: yup.string().required(),
  demographic: yup.string(),
  isHentai: yup.boolean(),
  description: yup.string(),
});

const useStyles = makeStyles((theme) => ({
  formField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const MangaForm = ({ operation }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      artist: "",
      status: "ongoing",
      demographic: "",
      isHentai: false,
      description: "",
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
      <TextField
        fullWidth
        id="author"
        name="author"
        label="Author"
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
        variant="outlined"
        className={classes.formField}
      />
      <TextField
        fullWidth
        id="artist"
        name="artist"
        label="Artist"
        value={formik.values.artist}
        onChange={formik.handleChange}
        error={formik.touched.artist && Boolean(formik.errors.artist)}
        helperText={formik.touched.artist && formik.errors.artist}
        variant="outlined"
        className={classes.formField}
      />
      <FormControl className={classes.formField} fullWidth>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          id="status"
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
        >
          <MenuItem value="ongoing">Ongoing</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="cancelled">Cancelled</MenuItem>
          <MenuItem value="hiatus">Hiatus</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formField} fullWidth>
        <InputLabel id="demographic-label">Demographic</InputLabel>
        <Select
          id="demographic"
          name="demographic"
          value={formik.values.demographic}
          onChange={formik.handleChange}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="shounen">Shounen</MenuItem>
          <MenuItem value="shoujo">Shoujo</MenuItem>
          <MenuItem value="seinen">Seinen</MenuItem>
          <MenuItem value="josei">Josei</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formField} fullWidth>
        <FormControlLabel
          label="Hentai"
          control={
            <Checkbox
              id="isHentai"
              name="isHentai"
              checked={formik.values.isHentai}
              onChange={formik.handleChange}
              color="primary"
            />
          }
        />
      </FormControl>
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        variant="outlined"
        className={classes.formField}
        multiline
        rows={4}
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

MangaForm.propTypes = {
  operation: PropTypes.func.isRequired,
};

export default MangaForm;

import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    marginBottom: 30,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const headerSections = [
  { title: "Home", url: "/" },
  { title: "Create Manga", url: "/manga/new" },
  { title: "Latest", url: "#" },
  { title: "Browse", url: "#" },
  { title: "Search", url: "#" },
];

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <NextLink href="/" passHref>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className={classes.toolbarTitle}
            noWrap
          >
            <Link color="inherit">Mangaroo</Link>
          </Typography>
        </NextLink>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {headerSections.map((section) => (
          <NextLink key={section.title} href={section.url} passHref>
            <Link
              color="inherit"
              variant="body2"
              className={classes.toolbarLink}
              noWrap
            >
              {section.title}
            </Link>
          </NextLink>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;

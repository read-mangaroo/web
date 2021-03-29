import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const headerSections = [
  { title: "Home", url: "#" },
  { title: "Latest", url: "#" },
  { title: "Browse", url: "#" },
  { title: "Search", url: "#" },
];

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
          noWrap
        >
          Mangaroo
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {headerSections.map((section) => (
          <Link
            key={section.title}
            color="inherit"
            variant="body2"
            className={classes.toolbarLink}
            noWrap
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;

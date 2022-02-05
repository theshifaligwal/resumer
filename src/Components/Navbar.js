import React from "react";

// React Router DOM
import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from "@mui/styles";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  navBarContainer: {
    backgroundColor: "#FC4F4F",
  },
  navLinks: {
    marginLeft: "1rem",
    display: "flex",
  },
  logoLink: {
    textDecoration: "none",
    flexGrow: "1",
    cursor: "pointer",
  },
  logo: {
    fontSize: "1.5rem!important",
    color: "#FBF8F1",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    marginLeft: "2rem",
    "&:hover": {
      color: "#FFBC80",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.navBarContainer}>
        <Link to="/" className={classes.logoLink}>
          <Typography className={classes.logo}>Resume Builder</Typography>
        </Link>
        <div className={classes.navLinks}>
          <Link to="/resume-builder" className={classes.link}>
            Resume
          </Link>
          <Link to="/contact" className={classes.link}>
            {`Contact & Query`}
          </Link>
          <Link to="/top-rated-resume" className={classes.link}>
            Top Rated Resume
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

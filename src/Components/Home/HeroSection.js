import { Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQMOZ0sFx9fjntm_iSNAuPEQkbYxNAp4Jov1xcqaZh_oM0FoyQeE0KhYc0JzYBL-gluM&usqp=CAU")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroSectionContainerStyle: {
    width: "38.9rem",
    margin: "auto",
    minWidth: "10rem",
    backgroundColor: "#FFBC8059",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
  mainHeadingHeroSectionStyle: {
    color: "#FBF8F1",
  },
  subHeadingHeroSectionStyle: {
    textAlign: "justify",
    color: "#FFEDDB",
    fontWeight: "400",
  },
  btnHeroSectionStyle: {
    padding: "0.5rem 1rem!important",
    backgroundColor: "#FFBC80!important",
    color: "#B33030",
    margin: "1rem auto 0",
  },
  btnLinkHeroSectionStyle: {
    textDecoration: "none",
    margin: "0.5rem auto 0 0",
  },
  btnTextHeroSectionStyle: {
    color: "#313552",
    fontWeight: "600",
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.bgImage}>
        <div className={[classes.heroSectionContainerStyle]}>
          <Typography
            variant="h2"
            className={classes.mainHeadingHeroSectionStyle}
          >
            Build Your Future Now
          </Typography>
          <Typography
            variant="p"
            className={classes.subHeadingHeroSectionStyle}
          >
            “If you're waiting until you feel talented enough to make it, you'll
            never make it.” ― Criss Jami
          </Typography>
          <Link
            className={classes.btnLinkHeroSectionStyle}
            to={"/resume-builder"}
          >
            <Button
              size="small"
              variant="contained"
              className={classes.btnHeroSectionStyle}
            >
              <Typography
                variant="p"
                className={classes.btnTextHeroSectionStyle}
              >
                Create Resume Now
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;

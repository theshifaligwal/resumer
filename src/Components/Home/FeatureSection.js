import { Typography, Button, ListItemText, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  bgImage: {
    // backgroundImage:
    //   'url("https://images-snaphunt.s3-ap-southeast-1.amazonaws.com/content-media/img/5_tips_for_an_awesome_resume.jpg")',
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    backgroundColor: "#F9E4D4",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroSectionContainerStyle: {
    width: "50rem",
    margin: "auto",
    minWidth: "10rem",
    backgroundColor: "#FFBC8059",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
  mainHeadingHeroSectionStyle: {
    color: "#1572A1",
  },
  subHeadingHeroSectionStyle: {
    textAlign: "justify",
    color: "#DA1212",
    fontWeight: "400",
  },
  btnHeroSectionStyle: {
    padding: "0.5rem 1rem!important",
    backgroundColor: "#E3BEC680!important",
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

const FeatureSection = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.bgImage}>
        <div className={[classes.heroSectionContainerStyle]}>
          <Typography
            variant="h2"
            className={classes.mainHeadingHeroSectionStyle}
          >
            What is the best resume builder?
          </Typography>
          <Typography
            variant="p"
            className={classes.subHeadingHeroSectionStyle}
          >
            {`We're proud parents - we think Resumer is one of the best resume
            builders on the market.`}
          </Typography>
          <List>
            <ListItemText>
              {`-> Free to try and download a simple txt. resume.`}
            </ListItemText>
            <ListItemText>
              {`-> Premium features unlock a library of templates.`}
            </ListItemText>
            <ListItemText>{`-> Unlimited storage.`}</ListItemText>
            <ListItemText>
              {`-> Pre-written content based on your job history.`}
            </ListItemText>
            <ListItemText>
              {`-> Section-by-section writing tips and advice.`}
            </ListItemText>
            <ListItemText>
              {`-> Pre-built resume sections that free up your time.`}
            </ListItemText>
            <ListItemText>
              {`-> Additional writing guides to help you outside of the builder`}
            </ListItemText>
          </List>
        </div>
      </div>
    </Fragment>
  );
};

export default FeatureSection;

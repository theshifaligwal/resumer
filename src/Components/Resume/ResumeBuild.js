import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  topDivResumeBuildDesign: {
    display: "flex",
    marginTop: "0.5rem!important",
  },
  avatarResumeBuildDesign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  nameResumeBuildDesign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nameTypographyResumeBuildDesign: {
    // margin:'auto'
  },
  itemDivResumeBuildDesign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem auto!important",
  },
  headingItemResumeBuildDesign: {
    fontWeight: "600!important",
    marginRight: "1rem!important",
  },
  valueItemResumeBuildDesign: {
    textAlign: "justify",
  },
  itemColumnDivResumeBuildDesign: {
    marginLeft: "2rem!important",
    display: "flex",
    flexDirection: "column!important",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem auto!important",
  },
  headingColumnItemResumeBuildDesign: {
    fontWeight: "600!important",
  },
  valueColumnItemResumeBuildDesign: {
    textAlign: "justify",
  },
}));

const ResumeBuild = ({ values }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Card>
        <CardContent>
          {/* <Typography align="center" gutterBottom variant="h5">
            Resume
          </Typography> */}
          <Grid
            container
            spacing={1}
            className={classes.topDivResumeBuildDesign}
          >
            <Grid xs={4} item className={classes.avatarResumeBuildDesign}>
              <Avatar
                alt={values.name}
                src={values.photo}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={8} className={classes.nameResumeBuildDesign}>
              <Typography
                align="center"
                variant="h2"
                className={classes.nameTypographyResumeBuildDesign}
              >
                {values.name}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.itemDivResumeBuildDesign}>
              <Typography
                variant="h6"
                className={classes.headingItemResumeBuildDesign}
              >
                Email:
              </Typography>
              <Typography
                variant="h6"
                className={classes.valueItemResumeBuildDesign}
              >
                {values.email}
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.itemDivResumeBuildDesign}>
              <Typography
                variant="h6"
                className={classes.headingItemResumeBuildDesign}
              >
                Hobbies:
              </Typography>
              <Typography
                variant="h6"
                className={classes.valueItemResumeBuildDesign}
              >
                {values.hobbies}
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.itemDivResumeBuildDesign}>
              <Typography
                variant="h6"
                className={classes.headingItemResumeBuildDesign}
              >
                Interest:
              </Typography>
              <Typography
                variant="h6"
                className={classes.valueItemResumeBuildDesign}
              >
                {values.interest}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.itemColumnDivResumeBuildDesign}
            >
              <Typography
                variant="h6"
                className={classes.headingColumnItemResumeBuildDesign}
              >
                Skills:
              </Typography>
              <Typography
                variant="h6"
                className={classes.valueColumnItemResumeBuildDesign}
              >
                {values.skills}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              className={classes.itemColumnDivResumeBuildDesign}
            >
              <Typography
                variant="h6"
                className={classes.headingColumnItemResumeBuildDesign}
              >
                Work Experience:
              </Typography>
              <Typography
                variant="h6"
                className={classes.valueColumnItemResumeBuildDesign}
              >
                {values.workExperience}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              className={classes.itemColumnDivResumeBuildDesign}
            >
              <Typography
                variant="h6"
                className={classes.headingColumnItemResumeBuildDesign}
              >
                Educational Qualification:
              </Typography>
              <Typography
                variant="h6"
                className={classes.valueColumnItemResumeBuildDesign}
              >
                {values.educationalQualification}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ResumeBuild;

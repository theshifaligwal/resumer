import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";

const useStyles = makeStyles(() => ({}));

const ResumeBuild = ({ values }) => {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt={values.name} src={values.photo} />
    </div>
  );
};

export default ResumeBuild;

import React, { Fragment, useState } from "react";

// Material UI
import { makeStyles } from "@mui/styles";

// Components
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ResumeBuild from "../Components/Resume/ResumeBuild";
import ResumeForm from "../Components/Resume/ResumeForm";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvgouseV2Y8T4oi3vTStAjol76GhAIvR-gQ&usqp=CAU")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  resumeContainerDiv: {
    width: "50rem",
    margin: "auto",
    borderRadius: "1rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    skills: "",
    workExperience: "",
    educationalQualification: "",
    hobbies: "",
    interest: "",
    proPicture: "",
  });
  return (
    <Fragment>
      <Navbar />
      <div className={classes.bgImage}>
        <div className={classes.resumeContainerDiv}>
          {isSubmitted ? (
            <ResumeBuild values={values} />
          ) : (
            <ResumeForm
              values={values}
              setValues={setValues}
              setIsSubmitted={setIsSubmitted}
            />
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Resume;

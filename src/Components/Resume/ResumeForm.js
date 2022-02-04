import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const useStyles = makeStyles(() => ({}));

const ResumeForm = ({ values, setValues, setIsSubmitted }) => {
  const classes = useStyles();
  const [photos, setPhotos] = useState();
  const {
    name,
    email,
    skills,
    workExperience,
    educationalQualification,
    hobbies,
    interest,
  } = values;

  useEffect(() => {
    if (!photos) {
      return;
    }
    const objectUrl = URL.createObjectURL(photos);
    setValues({ ...values, photo: objectUrl });
  }, [photos]);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    // Updating Values
    if (name !== "photo") setValues({ ...values, [name]: event.target.value });
    else {
      setPhotos(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <Grid>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form for any query and our team will get back to you
              within 24 hours.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={6} item>
                  <TextField
                    placeholder="Enter your name"
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={handleChange("name")}
                    value={name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    size="small"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange("email")}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="contained-button-file">
                    <label>
                      <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                      />
                    </label>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Skills"
                    multiline
                    rows={2}
                    size="small"
                    placeholder="Type your skills here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange("skills")}
                    value={skills}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Work Experience"
                    multiline
                    rows={2}
                    size="small"
                    placeholder="Type your Work Experience here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange("workExperience")}
                    value={workExperience}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Educational Qualification"
                    multiline
                    rows={2}
                    size="small"
                    placeholder="Type your Educational Qualification here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange("educationalQualification")}
                    value={educationalQualification}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Your Hobbies"
                    multiline
                    rows={1}
                    size="small"
                    placeholder="Type your Hobbies here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange("hobbies")}
                    value={hobbies}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Your Interest"
                    multiline
                    rows={1}
                    size="small"
                    placeholder="Type your Interest here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange("interest")}
                    value={interest}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default ResumeForm;

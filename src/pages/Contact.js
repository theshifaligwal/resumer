import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { url } from "../constants";

const useStyles = makeStyles(() => ({
  contactPageContainer: {
    zIndex: "2",
    // height: "95vh",
    padding: "2rem",
  },
  cardStyle: { maxWidth: "25rem", padding: "20px 5px", margin: "auto" },
  bgImage: {
    backgroundImage:
      'url("https://www.idfreshfood.com/wp-content/uploads/2017/09/contact_us_2.jpg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [value, setValue] = useState({
    name: "",
    email: "",
    query: "",
  });

  const { name, email, query } = value;

  const handleChange = (name) => (event) => {
    // Updating Values
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // If any field is empty then return
    if (!name && !email && !query) return;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(value),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Response Value: ", data);
        setValue({
          name: "",
          email: "",
          query: "",
        });
      })
      .catch((err) => {
        // Throwing Error if any
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <div className={classes.bgImage}>
        <Grid className={classes.contactPageContainer}>
          <Card className={classes.cardStyle}>
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
                  <Grid xs={12} sm={12} item>
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
                  <Grid item xs={12}>
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
                    <TextField
                      label="Message or Query"
                      multiline
                      rows={4}
                      size="small"
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange("query")}
                      value={query}
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
      <Footer />
    </Fragment>
  );
};

export default Contact;

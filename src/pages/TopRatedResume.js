import React, { Fragment, useEffect, useState } from "react";

// Material UI
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// Constants
import { url } from "../constants";

// Components
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles(() => ({
  trrContainerStyle: {
    padding: "2rem",
    backgroundColor: "#F7ECDE",
  },
  trrHeadingStyle: {
    color: "#FF9F45",
    margin: "0 auto 1.5rem!important",
  },
  trrItemStyle: { maxWidth: "50rem", padding: "20px 5px", margin: "auto" },
  tableHeadStyle: {
    fontWeight: "600!important",
  },
}));

const TopRatedResume = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data.data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={classes.trrContainerStyle}>
        <Typography
          variant="h4"
          align="center"
          className={classes.trrHeadingStyle}
        >
          Top Rated Resume
        </Typography>
        <TableContainer component={Paper} className={classes.trrItemStyle}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableHeadStyle}>
                  Ranking
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.tableHeadStyle}
                ></TableCell>
                <TableCell align="left" className={classes.tableHeadStyle}>
                  First Name
                </TableCell>
                <TableCell align="left" className={classes.tableHeadStyle}>
                  Last Name
                </TableCell>
                <TableCell align="center" className={classes.tableHeadStyle}>
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {user.id}
                  </TableCell>
                  <TableCell align="center">
                    <Avatar
                      alt={`${user.first_name} ${user.last_name}`}
                      src={user.avatar}
                    />
                  </TableCell>
                  <TableCell align="left">{user.first_name}</TableCell>
                  <TableCell align="left">{user.last_name}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TopRatedResume;

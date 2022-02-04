import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="#19282F" color="white">
        <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 5 }}>
          Resume Builder &copy; {new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;

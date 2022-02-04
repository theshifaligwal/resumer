import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <h1>Home</h1>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Home/HeroSection";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <HeroSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import FeatureSection from "../Components/Home/FeatureSection";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <HeroSection />
        <FeatureSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

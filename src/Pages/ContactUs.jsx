import React from "react";
import MiniHero from "../components/MiniHero";
import GetInTouch from "../components/GetInTouch";
import FeatureSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <MiniHero page={"Contact Us"} />
      <GetInTouch />
      <FeatureSection />
      <Footer />
    </>
  );
};

export default ContactUs;

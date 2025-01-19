import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BrowseRange from "../components/BrowseRange";
import ProductGrid from "../components/ProductGrid";
import InspirationSection from "../components/Inspirations";
import Footer from "../components/Footer";

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <BrowseRange />
    <ProductGrid />
    <InspirationSection />
    <Footer />
  </>
);

export default HomePage;

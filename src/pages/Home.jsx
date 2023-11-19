import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import LatestWorks from "../components/Home/LatestWorks";
import Pricing from "../components/Home/Pricing";
import Clients from "../components/Home/Clients";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
const Home = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div>
      <Hero />
      <About
        portolioSelected={portolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      <LatestWorks />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

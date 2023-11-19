import React from "react";
import Hero from "../components/Portfolio/Hero";
import PortfolioPictures from "../components/Portfolio/PortfolioPictures";
import All from "../components/Portfolio/All";
import Brands from "../components/Portfolio/Brands";
import Studio from "../components/Portfolio/Studio";
import Nature from "../components/Portfolio/Nature";
import Events from "../components/Portfolio/Events";
import PorftolioFooter from "../components/Portfolio/PorftolioFooter";
const Portfolio = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div>
      <Hero />
      <PortfolioPictures
        portolioSelected={portolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      {portolioSelected === "all" && <All />}
      {portolioSelected === "brands" && <Brands />}
      {portolioSelected === "studio" && <Studio />}
      {portolioSelected === "nature" && <Nature />}
      {portolioSelected === "events" && <Events />}
      <PorftolioFooter />
    </div>
  );
};

export default Portfolio;

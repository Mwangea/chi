import React from "react";
import { Link } from "react-router-dom";
const About = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div id="about" className="flex md:flex-row my-2 md:my-0 flex-col">
      <div className="md:w-[50%] my-8 md:m-0 w-[80%] mx-auto h-[80vh]  flex flex-col  justify-center items-center">
        <div
          className="md:m-8 m-2 md:p-12  p-4 bg-white   "
          style={{
            border: "3px solid black",
          }}
        >
          <div className="flex text-[#CCCCCC] gap-1 font-bold text-7xl">
            <p className="text-black">About</p>
            Us
          </div>
          <p className="bg-black h-1 w-24"></p>
          <p className="my-4">
          Radiance Captures is a vision brought to life through the lens, 
          where every click is an opportunity to tell a unique story.
          Our team of dedicated
           <strong> photographers</strong>,
           is committed to translating emotions into images that resonate and memories into visual legacies.{" "}
           From breathtaking landscapes to intimate portraits, we specialize in turning ordinary moments into extraordinary memories.
          </p>
        </div>
      </div>
      <div className="md:w-[50%] w-[90%] mx-auto bg-[#333333] text-white text-3xl   flex flex-col justify-center items-center">
        <div className="flex justify-center  ">
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("brands")}
            className="flex justify-center uppercase items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px]
            hover:bg-white hover:text-black cursor-pointer transition
            ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
            }}
          >
            brands
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("studio")}
            className="flex uppercase justify-center items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px]
            hover:bg-white hover:text-black cursor-pointer transition
            ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
              borderLeft: "3px solid white",
            }}
          >
            studio
          </Link>
        </div>
        <div className="flex justify-center  ">
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("nature")}
            className="flex justify-center uppercase items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
          >
            nature
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("events")}
            className="flex justify-center uppercase items-center md:h-[250px] md:w-[250px] w-[150px] h-[150px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
            style={{
              borderLeft: "3px solid white",
            }}
          >
            events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

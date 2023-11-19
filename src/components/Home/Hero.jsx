import React from "react";
import herobg from "../images/herobg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="md:h-[100vh] h-[80vh]  bg-no-repeat bg-fixed  bg-cover  bg-left   "
      id="home"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className=" items-end  flex md:h-[100vh] h-[80vh] bg-black/50 flex-col justify-center md:p-10 text-white  ">
        <div className="flex flex-col items-start">
          <div className="md:text-7xl text-5xl flex gap-2 font-bold">
            <span className="text-[#CCCCCC] "></span>
             Radiance Captures!
          </div>
          <div className="md:text-3xl text-xl text-center font-bold">
      we believe in the extraordinary power of visual storytelling. 
          </div>
          <Link
            to="/portfolio"
            className="text-white bg-black hover:scale-105 transition duration-500 ease-in-out  px-4 py-2  text-xl mt-4  text-white cursor-pointer  transition ease-in-out duration-500   "
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

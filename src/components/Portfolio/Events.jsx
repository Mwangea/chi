import React from "react";
import kaneda3 from "../images/kaneda3.jpg";
import agbaby3 from "../images/agbaby3.jpg";
import fireboy3 from "../images/fireboy3.jpg";
import fenty3 from "../images/fenty3.jpg";

const Events = () => {
  const images = [kaneda3, agbaby3, fireboy3, fenty3];
  return (
    <div className="flex-wrap flex justify-center items-center">
      {images.map((image) => (
        <div className=" md:w-[25%] w-[50%] flex  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img src={image} />
        </div>
      ))}
    </div>
  );
};

export default Events;

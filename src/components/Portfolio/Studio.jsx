import React from "react";
import agbaby1 from "../images/agbaby1.jpg";
import balentines1 from "../images/balentines1.jpg";
import fenty1 from "../images/fenty1.jpg";
import fenty2 from "../images/fenty2.jpg";

const Studio = () => {
  const images = [agbaby1, balentines1, fenty1, fenty2];
  return (
    <div className="flex-wrap flex justify-center items-center">
      {images.map((image) => (
        <div className=" md:w-[25%] w-[50%] flex  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img src={image}  />
        </div>
      ))}
    </div>
  );
};

export default Studio;

import React from "react";
import focalistic1 from "../images/focalistic1.jpg";
import fenty2 from "../images/fenty2.jpg";
import kaneda1 from "../images/kaneda1.jpg";
import fireboy2 from "../images/fireboy2.jpg";
const Brands = () => {
    const images = [focalistic1, fenty2, kaneda1, fireboy2];
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

export default Brands;

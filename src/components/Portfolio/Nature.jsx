import React from "react";
import jameson1 from "../images/jameson1.jpg";
import joan3 from "../images/joan3.jpg";
import nsg1 from "../images/nsg1.jpg";
import guiness1 from "../images/guiness1.jpg";

const Nature = () => {
  const images = [jameson1, joan3, nsg1, guiness1];
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

export default Nature;

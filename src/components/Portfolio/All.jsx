import React from "react";
import { clients } from "../clientsdatabase";
const All = () => {
  return (
    <div className="flex-wrap flex justify-center items-center">
      {clients.map((client) => (
        <div className="w-[50%] md:w-[25%] flex  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img src={client.img} alt={client.name}/>
        </div>
      ))}
    </div>
  );
};

export default All;

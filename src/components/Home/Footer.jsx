import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#111111]">
      <div className="flex justify-between gap-4 md:gap-0  md:flex-row flex-col items-center mx-auto md:w-[80%] w-[90%] p-4">
        <img src={logo} alt="logo" className="md:w-56 w-24" />
        <div className="uppercase flex md:gap-8 gap-2 md:text-xl text-sm text-[#888888]">
          <a
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
            
            href="#home"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
            
          >
            About
          </a>
          <a
            href="#works"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
            
          >
            Works
          </a>
          <a
            href="#clients"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
          >
            Clients
          </a>
          <a
            href="#pricing"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
            
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
            
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

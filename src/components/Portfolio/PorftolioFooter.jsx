import React from "react";
import logo from "../images/logo.png";
const PorftolioFooter = () => {
  return (
    <div className="bg-[#111111]">
      <div className="flex md:flex-row flex-col justify-between items-center mx-auto w-[80%] p-4">
        <img src={logo} alt="logo" className="w-56" />
        <div className="uppercase flex md:gap-8 gap-2 md:text-xl text-sm text-[#888888]">
          <a
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
            href="/"
          >
            Home
          </a>
          <a
            href="/"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
          >
            About
          </a>
          <a
            href="/"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
          >
            Works
          </a>
          <a
            href="/"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
          >
            Clients
          </a>
          <a
            href="/"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
          >
            Pricing
          </a>
          <a
            href="/"
            className="cursor-pointer hover:text-white transition ease-in-out duration-500"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default PorftolioFooter;

import React, { useState, useEffect } from "react";

import { RxCross1 } from "react-icons/rx";

import logo from "../images/logo.png";
import blacklogo from "../images/blacklogo.png";
import { FiMenu } from "react-icons/fi";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoTiktok } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
const NavBar = () => {
  const [textColor, setTextColor] = useState("white");
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [kinywaLogo, setKinywaLogo] = useState(logo);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 400) {
        setBackgroundColor("white");
        setTextColor("black");
        setKinywaLogo(logo);
      } else if (window.scrollY <= 400) {
        setBackgroundColor("transparent");
        setTextColor("white");
        setKinywaLogo(logo);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300  p-2 md:p-4 "
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <section className="flex justify-between ">
        <a style={{ color: `${textColor}` }} href="/">
          <div className="flex items-center">
            <img src={kinywaLogo} alt="logo" className="md:w-24 w-12 " />
            <div className="flex flex-col justify-between ml-2">
              <h1 className="md:text-3xl  text-xl font-bold ">Radiance</h1>
              <p className="md:text-sm text-xs ">Photography</p>
            </div>
          </div>
        </a>

        <div className="flex">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex group cursor-pointer  transition ease-in-out duration-500"
          >
            <FiMenu
              style={{ color: `${textColor}` }}
              className=" font-bold cursor-pointer animate-bounce  focus:scale-105 transition ease-in-out duration-500  text-3xl md:text-5xl"
            />
          </div>
        </div>
        <div
          className={
            isOpen
              ? "fixed w-[100%] left-0  top-0  h-[100vh] bg-[#333333]  transition ease-in-out duration-500"
              : "fixed top-[-200%] h-[100vh] w-[100%]  left-0  transition ease-in-out duration-500"
          }
        >
          <div
            className="flex justify-end p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxCross1 className="text-4xl text-white" />
          </div>

          <div className="flex flex-col text-3xl uppercase text-[#888888] items-center gap-8">
            <a
              className="cursor-pointer hover:text-white transition ease-in-out duration-500"
              href="/"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </a>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            <a
              href="#about"
              className="cursor-pointer hover:text-white transition ease-in-out duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </a>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            <a
              href="#works"
              className="cursor-pointer hover:text-white transition ease-in-out duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Works
            </a>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            <a
              href="#clients"
              className="cursor-pointer hover:text-white transition ease-in-out duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Clients
            </a>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            <a
              href="#pricing"
              className="cursor-pointer hover:text-white transition ease-in-out duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Pricing
            </a>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            <a
              href="#contact"
              className="cursor-pointer hover:text-white transition ease-in-out duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </a>
          </div>
          <section
            className=" mt-4 flex   text-white   justify-center items-center "
            onClick={() => setIsOpen(!isOpen)}
          >
            <a
              
              className=" md:p-4 p-2 group hover:bg-[#CCCCCC] duration-300 transition  ease-in-out  cursor-pointer   "
              style={{ border: "1px solid #888888" }}
            >
              <AiFillInstagram className="md:text-4xl text-2xl  group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
            </a>
            <a
              
              className=" md:p-4 p-2 group hover:bg-[#CCCCCC] duration-300 transition  ease-in-out  cursor-pointer   "
              style={{ border: "1px solid #888888" }}
            >
              <SiGmail className="md:text-4xl text-2xl  group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
            </a>

            <a
              
              style={{ border: "1px solid #888888" }}
              className=" md:p-4 p-2 group hover:bg-[#CCCCCC] duration-300  ease-in-out  cursor-pointer   "
            >
              <AiFillTwitterCircle className="md:text-4xl text-2xl  group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
            </a>
            <a
              
              style={{ border: "1px solid #888888" }}
              className=" md:p-4 p-2 group hover:bg-[#CCCCCC] duration-300  ease-in-out  cursor-pointer   "
            >
              <IoLogoTiktok className="md:text-4xl text-2xl  group-hover:text-black  group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
            </a>

            <a
             
              style={{ border: "1px solid #888888" }}
              className=" md:p-4 p-2 group hover:bg-[#CCCCCC] duration-300  ease-in-out  cursor-pointer   "
            >
              <FiPhoneCall className="md:text-4xl text-2xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
            </a>
            <a
             
              style={{ border: "1px solid #888888" }}
              className=" md:p-4 p-2 group hover:bg-[#CCCCCC] duration-300  ease-in-out  cursor-pointer   "
            >
              <FaWhatsapp className="md:text-4xl text-2xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
            </a>
          </section>
        </div>
      </section>
    </div>
  );
};

export default NavBar;

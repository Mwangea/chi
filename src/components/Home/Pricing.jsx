import React from "react";
import { IoStarSharp } from "react-icons/io5";
const Pricing = () => {
  return (
    <div id="pricing" className=" my-4  md:p-8 p-4 ">
      <h1 className="text-5xl font-bold">Pricing</h1>
      <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between mt-8">
        <div className="md:w-[30%]  border-2 border-[#888888] hover:border-black transition ease-in-out duration-500 hover:scale-105 cursor-pointer p-4 md:p-8">
          <div className="flex flex-col  w-[90%] mx-auto">
            <div className="flex mb-2 justify-between items-end">
              <h1 className="text-md uppercase">Package</h1>
              <h1 className="text-2xl font-bold">ECONOM</h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex text-black text-sm gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h1 className="text-xl p-2 bg-black text-white">KSH 1500/hr</h1>
            </div>
            <hr className="my-4" />
            <div className="flex bg-[#333333] text-white  p-8 h-[300px] flex-col gap-2">
              <p>- 2 Hours</p>
              <p>- 1 Photographer</p>
              <p>- 1 Videographer</p>
            </div>
            <hr className="my-4" />
            <button className="bg-black  text-white py-4 px-2">Book Now</button>
          </div>
        </div>
        <div className="md:w-[30%] border-2 border-[#888888] hover:border-black transition ease-in-out duration-500 hover:scale-105 cursor-pointer p-4  md:p-8">
          <div className="flex flex-col  w-[90%] mx-auto">
            <div className="flex mb-2 justify-between items-end">
              <h1 className="text-md uppercase">Package</h1>
              <h1 className="text-2xl uppercase font-bold">BASIC</h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex text-sm text-black  gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h1 className="text-xl p-2 bg-black text-white">KSH 3500/hr</h1>
            </div>
            <hr className="my-4" />
            <div className="flex bg-[#333333] text-white  p-8 h-[300px] flex-col gap-2">
              <p>- 6 Hours</p>
              <p>- 4 Photographer</p>
              <p>- 2 Videographer</p>
              <p>- 2 Videographer</p>
            </div>
            <hr className="my-4" />
            <button className="bg-black  text-white  py-4 px-2">
              Book Now
            </button>
          </div>
        </div>
        <div className="md:w-[30%] border-2 border-[#888888] hover:border-black transition ease-in-out duration-500 hover:scale-105 cursor-pointer p-4  md:p-8">
          <div className="flex flex-col  w-[90%] mx-auto">
            <div className="flex mb-2 justify-between items-end">
              <h1 className="text-md uppercase">Package</h1>
              <h1 className="text-2xl uppercase font-bold">VIP</h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex text-black text-sm gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h1 className="text-xl p-2 bg-black text-white">KSH 3500/hr</h1>
            </div>
            <hr className="my-4" />
            <div className="flex bg-[#333333] text-white  p-8 h-[300px] flex-col gap-2">
              <p>- 6 Hours</p>
              <p>- 4 Photographer</p>
              <p>- 2 Videographer</p>
              <p>- 2 Videographer</p>
            </div>
            <hr className="my-4" />
            <button className="bg-black  text-white py-4 px-2">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

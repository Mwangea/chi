import React from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="  bg-[#333333]  ">
      <div className="flex  md:flex-row flex-col">
        <div className="md:w-[50%] w-[90%] mx-auto   bg-white flex flex-col  md:p-12 p-4 items-center md:items-end ">
          <div className="flex gap-2 text-white font-bold text-5xl">
            <h1 className="text-black">Text</h1>
            Me
          </div>
          <input
            type="text"
            placeholder="Your Name.. *"
            className="md:w-[70%] w-[90%] p-2 my-2 border-2 border-[#CCCCCC] outline-none"
          />
          <input
            type="text"
            placeholder="Your Email .. *"
            className="md:w-[70%] w-[90%] p-4 my-2 border-2 border-[#CCCCCC] outline-none"
          />
          <textarea
            type="text"
            placeholder="Your Message... *"
            className="md:w-[70%] w-[90%] p-4 my-2 border-2 border-[#CCCCCC] outline-none"
            rows={10}
          />
          <button
            type="submit"
            className="bg-black text-white py-4 px-2 md:w-[70%] w-[90%] text-center"
          >
            Send Message
          </button>
        </div>
        <div className="md:w-[50%] w-[90%] mx-auto  flex flex-col  md:p-12 p-4 items-start ">
          <div className="flex gap-2 text-white mb-4 font-bold text-5xl">
            Contacts
          </div>
          <div className="flex items-center gap-4">
            <BsPhone className="text-7xl text-[#CCCCCC]" />
            <div className="flex  flex-col">
              <h1 className="text-white text-xl">+254 791 612 169</h1>
              <h1 className="text-[#CCCCCC] uppercase">Business days only</h1>
            </div>
          </div>

          <hr className="my-8 w-[90%] border-[#CCCCCC]" />

          <div className="flex items-center gap-4">
            <AiOutlineMail className="text-7xl text-[#CCCCCC]" />
            <div className="flex  flex-col">
              <h1 className="text-white text-xl">officialchigodi@gmail.com </h1>
              <h1 className="text-[#CCCCCC] uppercase">
                UP TO 72 HOURS RESPOND
              </h1>
            </div>
          </div>

          <hr className="my-8 w-[90%] border-[#CCCCCC]" />
          <div className="flex items-center gap-4">
            <BsInstagram className="text-7xl text-[#CCCCCC]" />
            <div className="flex  flex-col">
              <h1 className="text-white text-xl">@kingchiofficial</h1>
              <h1 className="text-[#CCCCCC] uppercase">
                UP TO 72 HOURS RESPOND
              </h1>
            </div>
          </div>

          <hr className="my-8 w-[90%] border-[#CCCCCC]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

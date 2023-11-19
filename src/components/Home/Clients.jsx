import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { clients } from "../clientsdatabase";

import { FreeMode, Navigation, Thumbs, Pagination, Autoplay } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showExtraImages, setShowExtraImages] = useState(false);
  const [clickedImageId, setClickedImageId] = useState(null);

  return (
    <>
      <div id="clients" className="bg-[#333333] py-4 md:py-8 ">
        {showExtraImages &&
          clients.map(
            (client) =>
              client.id === clickedImageId && (
                <div className="fixed  bg-white shadow-xl h-[700px] my-auto transition ease-in-out duration-500 inset-0 bg-opacity z-10  w-[90%]  mx-auto">
                  <div className="flex justify-end  p-4">
                    <button
                      className="bg-black text-white px-4 py-2 rounded-lg"
                      onClick={() => setShowExtraImages(!showExtraImages)}
                    >
                      X
                    </button>
                  </div>

                  <div className="w-[80%] flex md:flex-row flex-col gap-2 mx-auto">
                    <img
                      src={client.extra_img.img1}
                      alt="pic1"
                      className="md:h-[600px] h-[300px] object-cover mx-auto object-top w-[90%] md:w-[50%]"
                    />
                    <img
                      src={client.extra_img.img2}
                      alt="pic1"
                      className="md:h-[600px] h-[300px] object-cover mx-auto object-top  w-[90%] md:w-[50%]"
                    />
                  </div>
                </div>
              )
          )}

        <div className=" text-start  flex flex-col  items-end  p-12">
          <h1 className="text-7xl   text-white   font-bold  flex gap-2 ">
            Clients
          </h1>
          <p className="bg-white   transition ease-in-out duration-500   h-1 w-12"></p>
        </div>
        <div className="md:w-[80%] w-[90%]  mx-auto ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            className="mb-2 cursor-pointer py-8"
            thumbs={{ swiper: thumbsSwiper }}
            pagination={true}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
          >
            {clients.map((client) => (
              <SwiperSlide>
                <div className="flex justify-around  ">
                  <img
                    src={client.img}
                    alt="pic1"
                    className="md:h-[70vh]  object-cover object-top w-[60%]  md:w-[48%]"
                  />
                  <div className="bg-white md:w-[48%] w-[38%]   md:h-[50vh] flex flex-col  my-auto p-4 md:p-8">
                    <h1 className="md:text-4xl font-bold ">{client.name}</h1>
                    <p className="text-[#333333]">{client.title}</p>
                    <p className="bg-[#333333] h-[2px] w-12"></p>
                    <p className="my-4 md:text-md text-xs">{client.description}</p>
                    <p className="bg-[#333333] h-[2px] my-2 w-36"></p>
                    <p
                      className="flex uppercase text-center md:text-md text-xs gap-2 bg-black px-2 md:py-4 py-2 md:w-[40%] text-white flex justify-center   cursor-pointer hover:scale-105 duration-500 transition ease-in-out"
                      onClick={() => {
                        setShowExtraImages(true);
                        setClickedImageId(client.id);
                      }}
                    >
                      Explore Photo set
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={4}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,

              loop: true,
            }}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            {clients.map((client) => (
              <SwiperSlide className="h-[300px] w-[25%]  ">
                <img
                  src={client.img}
                  className="  object-cover object-center opacity-60 hover:opacity-100 cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

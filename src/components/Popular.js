import React, { useRef, useEffect, useState } from "react";
import London from "./images/london.jpg";
import Phiphi from "./images/phiphi.jpg";
import China from "./images/cina.jpg";
import Lombok from "./images/lombok.jpg";

const Popular = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Ubah angka 200 sesuai kebutuhan
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Ubah angka 200 sesuai kebutuhan
    }
  };

  return (
    <div className="container px-[10%] mt-40">
      <div className="flex justify-between items-center py-20">
        <div className="text-6xl 2xl:text-7xl max-w-lg leading-snug font-semibold">
          Find Popular Destination
        </div>

        {/* button slider */}

        <div className="text-6xl md:flex gap-5 hidden">
          <button
            id="left"
            className=" fa-solid fa-chevron-left fa-xs 
                        hover:text-white rounded-full w-20 h-20 border border-black cursor-pointer hover:bg-black
                        transition duration-300"
            onClick={scrollLeft}
          >
            {/* Ikon chevron-right dari Font Awesome */}
          </button>
          <button
            id="right"
            className=" fa-solid fa-chevron-right fa-xs 
                        hover:text-white rounded-full w-20 h-20 border border-black cursor-pointer hover:bg-black
                        transition duration-300"
            onClick={scrollRight}
          >
            {/* Ikon chevron-right dari Font Awesome */}
          </button>
        </div>

        {/* button slider end */}
      </div>

      {/* card */}

      <div
        id="scroll-card"
        className="text-2xl 2xl:text-4xl flex flex-row gap-10 overflow-x-hidden overflow-x-auto w-screen max-width scroll-smooth "
        ref={scrollRef}
      >
        <div className="bg-white p-5 min-w-[25rem] 2xl:min-w-[35rem] rounded-3xl">
          <img
            src={London}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5 font-semibold">Westminster Bridge</div>
          <div className="text-xl 2xl:text-2xl secol pt-2 2xl:pt-4">
            <i className="fa-solid fa-location-dot mr-2"></i>{" "}
            {/* Ikon location-dot dari Font Awesome */}
            London, Uk
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl 2xl:text-4xl font-semibold">
              $120
              <span className="text-xl 2xl:text-2xl secol pt-2 font-normal">
                /Person
              </span>
            </div>
            <a
              href="#"
              className="text-lg bg-trueGray-900 text-white px-4 py-2 2xl:px-6 2xl:py-4 rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="bg-white p-5 min-w-[25rem] 2xl:min-w-[35rem] rounded-3xl">
          <img
            src={Phiphi}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5 font-semibold">Sea Beach Phi Phi Island</div>
          <div className="text-xl 2xl:text-2xl secol pt-2 2xl:pt-4">
            <i className="fa-solid fa-location-dot mr-2"></i>{" "}
            {/* Ikon location-dot dari Font Awesome */}
            Krabi Province, Thailand
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl 2xl:text-4xl font-semibold">
              $120
              <span className="text-xl 2xl:text-2xl secol pt-2 font-normal">
                /Person
              </span>
            </div>
            <a
              href="#"
              className="text-lg bg-trueGray-900 text-white px-4 py-2 2xl:px-6 2xl:py-4 rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="bg-white p-5 min-w-[25rem] 2xl:min-w-[35rem] rounded-3xl">
          <img
            src={China}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5 font-semibold">Day City View</div>
          <div className="text-xl 2xl:text-2xl secol pt-2 2xl:pt-4">
            <i className="fa-solid fa-location-dot mr-2"></i>{" "}
            {/* Ikon location-dot dari Font Awesome */}
            China
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl 2xl:text-4xl font-semibold">
              $120
              <span className="text-xl 2xl:text-2xl secol pt-2 font-normal">
                /Person
              </span>
            </div>
            <a
              href="#"
              className="text-lg bg-trueGray-900 text-white px-4 py-2 2xl:px-6 2xl:py-4 rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="bg-white p-5 min-w-[25rem] 2xl:min-w-[35rem] rounded-3xl">
          <img
            src={Lombok}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5 font-semibold">Lombok</div>
          <div className="text-xl 2xl:text-2xl secol pt-2 2xl:pt-4">
            <i className="fa-solid fa-location-dot mr-2"></i>{" "}
            {/* Ikon location-dot dari Font Awesome */}
            Indonesia
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl 2xl:text-4xl font-semibold">
              $120
              <span className="text-xl 2xl:text-2xl secol pt-2 font-normal">
                /Person
              </span>
            </div>
            <a
              href="#"
              className="text-lg bg-trueGray-900 text-white px-4 py-2 2xl:px-6 2xl:py-4 rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* card end */}
    </div>
  );
};

export default Popular;

import React, { useRef, useEffect, useState  } from 'react';
import London from './images/london.jpg';
import Phiphi from './images/phiphi.jpg';
import China from './images/cina.jpg';
import Lombok from './images/lombok.jpg';

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
    <div className="">
      <div className="flex justify-between items-center py-20">
        <div className="text-7xl max-w-lg">Find Popular Destination</div>

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
        className="scroll-card text-4xl flex flex-row gap-10 overflow-x-hidden overflow-x-auto w-screen max-width scroll-smooth "
        ref={scrollRef}
      >

        <div className="bg-white p-5 scroll-w rounded-3xl">
          <img
            src={London}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5">Westminster Bridge</div>
          <div className="text-2xl secol pt-2">
          <i className="fa-solid fa-location-dot mr-2"></i> {/* Ikon location-dot dari Font Awesome */}
            London, Uk
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <a href="#" className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </a>
          </div>
        </div>

        <div className="bg-white p-5 scroll-w rounded-3xl">
          <img
            src={Phiphi}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5">Sea Beach Phi Phi Island</div>
          <div className="text-2xl secol pt-2">
          <i className="fa-solid fa-location-dot mr-2"></i> {/* Ikon location-dot dari Font Awesome */}
            Krabi Province, Thailand
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <a href="#" className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </a>
          </div>
        </div>

        <div className="bg-white p-5 scroll-w rounded-3xl">
          <img
            src={China}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5">Day City View</div>
          <div className="text-2xl secol pt-2">
          <i className="fa-solid fa-location-dot mr-2"></i> {/* Ikon location-dot dari Font Awesome */}
            China
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <a href="#" className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
              Book Now
            </a>
          </div>
        </div>

        <div className="bg-white p-5 scroll-w rounded-3xl">
          <img
            src={Lombok}
            alt="West Minster Bridge"
            className="h-72 w-full rounded-3xl"
          />
          <div className="pt-5">Lombok</div>
          <div className="text-2xl secol pt-2">
          <i className="fa-solid fa-location-dot mr-2"></i> {/* Ikon location-dot dari Font Awesome */}
            Indonesia
          </div>
          <div className="pt-5 flex justify-between items-center">
            <div className="text-3xl">
              $120<span className="text-2xl secol pt-2">/Person</span>
            </div>
            <a href="#" className="text-xl bg-trueGray-900 text-white px-6 py-4 rounded-full">
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

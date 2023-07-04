import React from "react";
import Pic1 from "./images/pic1.jpg";
import Pic2 from "./images/bali2.jpg";
import pic3 from "./images/pic4.jpg";
import Pic4 from "./images/bali3.jpg";
import Plane from "./images/plane.png";

const Services = () => {
  return (
    <div className="flex mt-40">
      <div className="md:max-w-sm 2xl:max-w-lg">
        <div className="text-5xl 2xl:text-7xl pb-14 leading-snug 2xl:leading-snug font-semibold">
          What Services We Provide
        </div>

        <div className="text-4xl 2xl:text-5xl">
          <div className="pb-5">01. Travel Plan</div>
          <div className="text-base 2xl:text-xl secol pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident vel!
          </div>
          <div className="pb-5">02. Flights Booking</div>
          <div className="text-base 2xl:text-xl secol pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident vel dolor sit amet!
          </div>
          <div className="pb-5">03. Accomodation</div>
          <div className="text-base 2xl:text-xl secol pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident vel adipisicing elit!
          </div>
        </div>
      </div>

      <div className="relative hidden laptop:block flex-1 ml-32 2xl:ml-44">
        <img
          src={Plane}
          alt="apa aja"
          className="absolute w-[80%] opacity-30 -top-20 2xl:-top-24"
        />
        <img
          src={Pic1} // kiri atas
          alt="apa aja"
          className="absolute rounded-full w-52 h-52 2xl:w-60 2xl:h-60 top-0 left-0 object-cover"
        />
        <img
          src={Pic2} // kanan atas
          alt="apa aja"
          className="absolute rounded-full w-80 h-80 2xl:w-72 2xl:h-72 top-20 2xl:top-24 right-0 object-cover"
        />
        <img
          src={pic3} //kiri bawah
          alt="apa aja"
          className="absolute rounded-full w-80 h-80 2xl:w-72 2xl:h-72 bottom-20 2xl:bottom-24 left-0 object-cover"
        />
        <img
          src={Pic4} // kanan bawah
          alt="apa aja"
          className="absolute rounded-full w-52 h-52 2xl:w-60 2xl:h-60 bottom-0 right-20 object-cover"
        />
      </div>
    </div>
  );
};

export default Services;

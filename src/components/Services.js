import React from 'react';
import Pic1 from './images/pic1.jpg'
import Pic2 from './images/bali2.jpg'
import pic3 from './images/pic4.jpg'
import Pic4 from './images/bali3.jpg'

const Services = () => {
  return (
    <div className='flex'>
      <div className="md:max-w-lg">
        <div className="text-7xl pb-14">What Services We Provide</div>

        <div className="text-5xl">
          <div className="pb-5">01. Travel Plan</div>
          <div className="text-xl secol pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident vel!
          </div>
          <div className="pb-5">02. Flights Booking</div>
          <div className="text-xl secol pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident vel dolor sit amet!
          </div>
          <div className="pb-5">03. Accomodation</div>
          <div className="text-xl secol pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident vel adipisicing elit!
          </div>
        </div>
      </div>

      <div className='relative hidden 2xl:block flex-1 ml-44'>
          <img src={Pic1} alt="apa aja" className="absolute rounded-full w-60 h-60 top-0 left-0 object-cover" />
          <img src={Pic2} alt="apa aja" className="absolute rounded-full w-72 h-72 top-24 right-0 object-cover" />
          <img src={pic3} alt="apa aja" className="absolute rounded-full w-72 h-72 bottom-24 left-0 object-cover" />
          <img src={Pic4} alt="apa aja" className="absolute rounded-full w-60 h-60 bottom-0 right-20 object-cover" />
      </div>
    </div>
  );
};

export default Services;

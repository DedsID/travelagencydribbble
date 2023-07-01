import React from 'react';
import Stories2 from './images/stories2.png'
import StoriesCard from './CardComp';

const Stories = () => {
  return (
    <div className="grid 2xl:grid-cols-2 relative mt-80">

      <div className="hidden 2xl:block bg-orange-300 rounded-3xl max-w-[650px]">
        <img src={Stories2} alt="apa aja" className="absolute w-[650px] bottom-0" />
      </div>

      <div className="hidden 2xl:block absolute bg-white rounded-3xl px-8 py-6 top-20 desti">
        <div className="flex items-center text-6xl pb-2">
          <div className="jingga rounded-full p-2 mr-5 w-24 h-24 flex items-center justify-center">  {/* items-center untuk center secara atasbawah,  justify-center kanankiri*/}
            <i className="fa-solid fa-location-dot"></i> {/* Ikon location-dot dari Font Awesome */}
          </div>
          <div>
            <div className="relative">
              500<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Destination</div>
          </div>
        </div>
      </div>
      <div className="2xl:pl-36">
        <div className="text-7xl pb-10">Our Stories Have Adventures</div>
        <div className="text-xl secol pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at
          doloremque cumque praesentium, quis modi earum, fuga incidunt aliquid
          veniam perspiciatis voluptatem, harum explicabo architecto quidem.
          Libero?
        </div>

        <div className="flex gap-5 flex-grow">
          <div className="w-48 bg-white rounded-3xl p-8 py-12 2xl:hidden">
            <div className="text-6xl pb-4 relative">
              500<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Destination</div>
          </div>
          <div className="w-48 bg-white rounded-3xl p-8 py-12">
            <div className="text-6xl pb-4 relative">
            12k<span className="text-5xl absolute -top-1">+</span>
            </div>
            <div className="text-3xl">Success Journey</div>
          </div>
          <div className="w-48 bg-white rounded-3xl p-8 py-12">
              <div className="text-6xl pb-4 relative">
              16<span className="text-5xl absolute -top-1">+</span>
              </div>
              <div className="text-3xl">Award Winning</div>
          </div>
          <div className="w-48 bg-white rounded-3xl p-8 py-12">
              <div className="text-6xl pb-4 relative">
              20<span className="text-5xl absolute -top-1">+</span>
              </div>
              <div className="text-3xl">Years Of Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;

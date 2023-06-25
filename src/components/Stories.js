import React from 'react';
import StoriesCard from './CardComp';

const Stories = () => {
  return (
    <div className="grid 2xl:grid-cols-2 py-40 relative">
      <div className="hidden 2xl:block"></div>
      <div className="hidden 2xl:block absolute bg-white rounded-3xl px-8 py-6 top-60 desti">
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

        {/* card */}

        <div className="flex gap-5 flex-grow">

          {/* <StoriesCard
            value={500}
            description="Destination"
          />
          <StoriesCard
            value={12}
            description="Success Journey"
          />
          <StoriesCard
            value={16}
            description="Award Winning"
          />
          <StoriesCard
            value={20}
            description="Years Of Experience"
          /> */}
          
          
        </div>

        {/* end card */}

      </div>
    </div>
  );
};

export default Stories;

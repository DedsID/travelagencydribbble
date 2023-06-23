import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Embark = () => {
 

  return (
    <div className="style={headerStyle} md:max-w-2xl">
      <div className="relative inline-block">
        <div className="text-lg text-gray-600 border border-black pr-4 py-1 rounded-full">
        <FontAwesomeIcon icon={faLocationArrow} size="2xs" className='border border-black rounded-full mx-2'/>
          Discover The World
        </div>
      </div>

      <div className="text-7xl sm:text-8xl md:text-9xl pt-5 pb-7">
        Embark on Unforgottable Adventures
      </div>

      <div className="secol text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        accusantium vitae sunt ea officia totam earum omnis id quo architecto
        repellendus fuga, nam, atque odio sunt ea officia totam earum omnis sit amet consectetur adipisicing.
      </div>

      <div className="relative md:inline-block py-10 md:w-10/12">
        <div className="flex items-center justify-between text-xl border-2 border-gray rounded-full p-2 bg-white">
          <div className="relative flex items-center">
            <span className="absolute left-3">
              <i className="fas fa-search text-gray-500"></i> {/* Ikon search dari Font Awesome*/}
            </span>
            <input
              type="text"
              placeholder="Search your destination.."
              className="pl-10 pr-8 py-2 rounded-full text-gray-800 bg-white"
            />
          </div>
          <button className="ml-2 text-xl md:text-2xl px-10 py-3 bg-button text-gray-200 rounded-full">
            Search
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Embark;

import React from 'react';
import EmbarkPic from './images/edit-embark.png';
import BaliPic from './images/bali.jpg';
import Sbali1 from './images/bali1.jpg';
import Sbali2 from './images/bali2.jpg';
import Sbali3 from './images/bali3.jpg';
import Plane from './images/plane.png';


const Embark = () => {
  return (
    <div className='flex justify-between'> 
      <div className="md:max-w-xl ataslaptop:max-w-2xl">
        <div className="relative inline-block">
          <div className="text-base 2xl:text-lg text-gray-600 border border-black pr-4 py-1 rounded-full">
            <i className="fa-brands fa-telegram fa-xs px-2"></i>
            Discover The World
          </div>
        </div>

        <div className="text-7xl ataslaptop:text-8xl pt-5 pb-7 font-medium leading-tight">
          Embark on Unforgottable Adventures
        </div>

        <div className="secol text:base ataslaptop:text-xl text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          accusantium vitae sunt ea officia totam earum omnis id quo architecto
          repellendus fuga, nam.
        </div>

        <div className="relative md:inline-block py-10">
          <div className="flex items-center justify-between text-xl border-2 border-gray rounded-full p-2 bg-white">
            <div className="relative flex items-center">
              <span className="absolute left-3">
                <i className="fas fa-search text-gray-500"></i>{' '}
                {/* Ikon search dari Font Awesome*/}
              </span>
              <input
                type="text"
                placeholder="Search your destination.."
                className="pl-10 pr-8 py-2 rounded-full text-gray-800 bg-white text-sm ataslaptop:text-xl"
              />
            </div>
            <button className="ml-2 text-base ataslaptop:text-2xl px-10 py-3 bg-button text-gray-200 rounded-full">
              Search
            </button>
          </div>
        </div>

        <div className="text-2xl font-semibold">Global Partner</div>
        <div className="flex gap-12 fa-2xl pt-5">
          <i className="fa-brands fa-airbnb"></i>
          <i className="fa-brands fa-amazon"></i>
          <i className="fa-brands fa-apple"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>

    {/* gambar */}

      <div className='flex-1 relative text-center hidden laptop:block'>
        <img src={EmbarkPic} alt="apa aja" className="absolute w-full max-w-[700px] max-h-[700px] -top-16 -right-28" />
        <img src={Plane} alt="apa aja" className="w-20 h-20 absolute top-0" />
        

        {/* Small Card */}

        <div className='absolute top-24 2xl:top-36 left-14'>
          <div className='flex relative bg-white rounded-3xl flex-col w-[100px] 2xl:w-[150px] gap-2'>
            <div className='absolute bg-white px-3 py-1 rounded-xl -right-11 top-12 text-xs'>
              <i className="fa-solid fa-location-dot pr-2"></i>
              Indonesia
            </div>
            <img src={BaliPic} alt="apa aja" className="w-full rounded-t-3xl" />
            <div className='text-xs 2xl:text-sm'>
              Bali, Indonesia
            </div>
            <div className='flex flex-row items-center justify-center -mb-4'>
              <img src={Sbali1} alt="apa aja" className="rounded-full w-7 h-7 2xl:w-10 2xl:h-10 -mr-2 object-cover" />
              <img src={Sbali2} alt="apa aja" className="rounded-full w-7 h-7 2xl:w-10 2xl:h-10 -mr-2 object-cover" />
              <img src={Sbali3} alt="apa aja" className="rounded-full w-7 h-7 2xl:w-10 2xl:h-10 object-cover" />
            </div>
          </div>
        </div>

        {/* Small Card End */}

      </div>

    {/* gambar end */}

    </div>
  );
};

export default Embark;

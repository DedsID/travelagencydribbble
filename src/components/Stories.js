import React, { useEffect, useRef } from "react";
import Stories2 from "./images/stories2.png";
import StoriesCard from "./CardComp";

const Stories = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && imageRef.current) {
      const imageWidth = imageRef.current.offsetWidth;
      containerRef.current.style.maxWidth = `${imageWidth}px`;
    }
  }, []);

  return (
    <div className="flex mt-80">
      {/* <div className="">
        <div className="hidden laptop:block bg-orange-300 rounded-3xl max-w-[530px] max-h-[530px] 2xl:max-w-[650px] 2xl:max-h-[650px] items-end relative">
          <img
            src={Stories2}
            alt="apa aja"
            className="max-w-[530px] 2xl:max-w-[650px] bottom-0 absolute"
          />
        </div>
      </div> */}
      <div
        className="w-1/2 aspect-square hidden laptop:block bg-orange-300 rounded-3xl relative"
        ref={containerRef}
      >
        <img
          src={Stories2}
          alt="apa aja"
          className="max-w-[520px] 2xl:max-w-[650px] bottom-0 absolute"
          ref={imageRef}
        />
      </div>

      <div className="relative flex-1">
        <div className="hidden laptop:block absolute bg-white rounded-3xl px-8 py-6 top-20 -left-[40%] 2xl:-left-[25%]">
          <div className="flex items-center text-5xl 2xl:text-6xl pb-2">
            <div className="jingga rounded-full p-2 mr-5 w-20 h-20 2xl:w-24 2xl:h-24 flex items-center justify-center">
              {/* items-center untuk center secara atasbawah,  justify-center kanankiri*/}
              <i className="fa-solid fa-location-dot"></i>
              {/* Ikon location-dot dari Font Awesome */}
            </div>
            <div className="font-semibold">
              <div className="relative">
                500
                <span className="text-4xl 2xl:text-5xl absolute top-1 pl-1">
                  +
                </span>
              </div>
              <div className="text-lg 2xl:text-2xl pt-2">Destination</div>
            </div>
          </div>
        </div>

        <div className="laptop:pl-20 2xl:pl-36">
          <div className="text-5xl 2xl:text-7xl pb-10 leading-snug font-semibold">
            Our Stories Have Adventures
          </div>
          <div className="text-base 2xl:text-xl secol pb-10 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at
            doloremque cumque praesentium, quis modi earum, fuga incidunt
            aliquid veniam perspiciatis voluptatem, harum explicabo architecto
            quidem. Libero?
          </div>

          <div className="flex gap-5 flex-grow">
            <div className="w-36 2xl:w-48 bg-white rounded-3xl p-4 py-10 2xl:p-8 2xl:py-12 font-semibold laptop:hidden">
              <div className="text-5xl 2xl:text-6xl pb-4 2xl:pb-8 relative">
                500
                <span className="text-4xl 2xl:text-5xl absolute top-1 pl-1">
                  +
                </span>
              </div>
              <div className="text-lg 2xl:text-2xl">Destination</div>
            </div>

            <div className="w-36 2xl:w-48 bg-white rounded-3xl p-4 py-10 2xl:p-8 2xl:py-12 font-semibold">
              <div className="text-5xl 2xl:text-6xl pb-4 2xl:pb-8 relative">
                12k
                <span className="text-4xl 2xl:text-5xl absolute top-1 pl-1">
                  +
                </span>
              </div>
              <div className="text-lg 2xl:text-2xl">Success Journey</div>
            </div>
            <div className="w-36 2xl:w-48 bg-white rounded-3xl p-4 py-10 2xl:p-8 2xl:py-12 font-semibold">
              <div className="text-5xl 2xl:text-6xl pb-4 2xl:pb-8 relative">
                16
                <span className="text-4xl 2xl:text-5xl absolute top-1 pl-1">
                  +
                </span>
              </div>
              <div className="text-lg 2xl:text-2xl">Award Winning</div>
            </div>
            <div className="w-36 2xl:w-48 bg-white rounded-3xl p-4 py-10 2xl:p-8 2xl:py-12 font-semibold">
              <div className="text-5xl 2xl:text-6xl pb-4 2xl:pb-8 relative">
                20
                <span className="text-4xl 2xl:text-5xl absolute top-1 pl-1">
                  +
                </span>
              </div>
              <div className="text-lg 2xl:text-2xl">Years Of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;

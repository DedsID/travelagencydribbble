import React from "react";

const Feature = () => {
  return (
    <div className="container px-[10%] mt-40">
      <center>
        <h1 className="text-6xl 2xl:text-7xl font-semibold">Our Features</h1>
        <div className="pt-20 relative">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex lg:flex-col gap-5">
              <div className="flex flex-row relative justify-around">
                <div className="h-full w-20 lg:h-20 lg:rounded-full bg-trueGray flex items-center justify-center lg:outline outline-[40px] outline-bg z-20">
                  <span className="text-white text-2xl">01</span>
                </div>
                <div className="w-full max-w-2xl border-t-2 border-dashed border-gray-900 absolute top-10 -right-2/4 hidden lg:block"></div>
                {/* menambah garis putus2 */}
              </div>
              <div className="">
                <div className="text-3xl 2xl:text-[2.5rem] py-5 pb-7 2xl:pb-10 text-left lg:text-center font-semibold">
                  Dynamic Packaging
                </div>
                <div className="secol text-base 2xl:text-xl text-left lg:text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit blanditiis tempore quam! Quis, dolor hict.
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col gap-5 flex-row-reverse">
              <div className="flex flex-row relative justify-around">
                <div className="h-full w-20 lg:h-20 lg:rounded-full bg-trueGray flex items-center justify-center lg:outline outline-[40px] outline-bg z-20">
                  <span className="text-white text-2xl">02</span>
                </div>
              </div>
              <div className="">
                <div className="text-3xl 2xl:text-[2.5rem] py-5 pb-7 2xl:pb-10 text-right lg:text-center font-semibold">
                  Instant Itineary
                </div>
                <div className="secol text-base 2xl:text-xl text-right lg:text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit blanditiis tempore quam! Quis, dolor hic eos
                  commodie.
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col gap-5">
              <div className="flex flex-row relative justify-around">
                <div className="h-full w-20 lg:h-20 lg:rounded-full bg-trueGray flex items-center justify-center lg:outline outline-[40px] outline-bg z-20">
                  <span className="text-white text-2xl">03</span>
                </div>
                <div className="w-full max-w-2xl border-t-2 border-dashed border-gray-900 absolute top-10 -left-2/4 hidden lg:block"></div>
                {/* menambah garis putus2 */}
              </div>
              <div className="">
                <div className="text-3xl 2xl:text-[2.5rem] py-5 pb-7 2xl:pb-10 text-left lg:text-center font-semibold">
                  Multiple Vertical
                </div>
                <div className="secol text-base 2xl:text-xl text-left lg:text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit blanditiis tempore quam! Quis, dolor hic. .
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Feature;

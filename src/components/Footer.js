import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row mt-16 xl:mt-40 pb-20">
      <div className="xl:w-[25%] xl:mr-12">
        <div className="text-4xl 2xl:text-5xl pb-5 font-bold">Tourplace</div>
        <div className="secol text-base 2xl:text-2xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam
          vero! Ipsum ipsa mollitia ex voluptates. Nihil! Ratione!
        </div>
      </div>
      <div className="flex-auto xl:block hidden">
        <div className="text-2xl 2xl:text-4xl pb-3 font-bold">Our Service</div>
        <ul>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Our Features
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Our Service
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Our Stories
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Popular Destination
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Way Of Travel
          </li>
        </ul>
      </div>
      <div className="flex-auto xl:block hidden">
        <div className="text-2xl 2xl:text-4xl pb-3 font-bold">Company</div>
        <ul>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            About Us
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Destination
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Tour
          </li>
          <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
            Blog
          </li>
        </ul>
      </div>

      {/* responsive only */}

      <div className="flex xl:hidden py-10">
        <div className="flex-auto">
          <div className="text-2xl 2xl:text-4xl pb-3 font-bold">
            Our Service
          </div>
          <ul>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Our Features
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Our Service
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Our Stories
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Popular Destination
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Way Of Travel
            </li>
          </ul>
        </div>
        <div className="flex-auto">
          <div className="text-2xl 2xl:text-4xl pb-3 font-bold">Company</div>
          <ul>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              About Us
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Destination
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Tour
            </li>
            <li className="secol text-base 2xl:text-2xl leading-[2.1] 2xl:leading-loose">
              Blog
            </li>
          </ul>
        </div>
      </div>

      {/* responsive only end */}

      <div className="flex flex-col md:max-xl:flex-row ">
        <div>
          <div className="text-2xl 2xl:text-4xl font-bold">
            Get The Latest Information
          </div>

          <div className="relative md:inline-block py-5 2xl:py-8">
            <div className="flex items-center justify-between text-base 2xl:text-2xl border-2 border-gray rounded-full p-2 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter Your Email..."
                  className="pl-5 py-2 rounded-full text-gray-800 bg-white"
                />
              </div>
              <button className="text-base 2xl:text-2xl px-5 py-2 bg-button text-gray-200 rounded-full">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:max-xl:pl-10">
          <div className="text-xl 2xl:text-2xl pb-5 2xl:pb-10 font-semibold">
            Join Our Social Media:
          </div>
          <div className="fa-xl">
            <a href="#" className="fa-brands fa-facebook"></a>
            <a href="#" className="fa-brands fa-twitter px-8"></a>
            <a href="#" className="fa-brands fa-linkedin"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

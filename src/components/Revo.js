import React from "react";
import RevoCard from "./CardComp";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";

const Revo = () => {
  return (
    <div className="mt-40">
      <center>
        <h1 className="text-5xl 2xl:text-7xl xl:w-2/4 text-center leading-snug font-semibold">
          Revolutionizing The Ways We Travel
        </h1>
      </center>
      <div className="pt-20 relative">
        <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-20">
          <RevoCard
            imageSrc={pic1}
            altText="Deskripsi Gambar 1"
            heading="Custom Booking"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            tenetur quis inventore met consectetur adipisicing"
          />

          <div class="border border-gray-400"></div>

          <RevoCard
            imageSrc={pic2}
            altText="Deskripsi Gambar 1"
            heading="End-To-End Messaging"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            voluptatum Culpa voluptatum at, molestiae, nostrum"
          />

          <div class="border border-gray-400"></div>

          <RevoCard
            imageSrc={pic3}
            altText="Deskripsi Gambar 1"
            heading="Instant Itinerary"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            voluptatum at, molestiae, nostrum adipisicing elit. Amet"
          />
        </div>
      </div>
    </div>
  );
};

export default Revo;

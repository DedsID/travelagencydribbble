import React from "react";

const RevoCard = ({ imageSrc, altText, heading, description }) => {
  return (
    <div>
      <div className="">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full max-2xl:h-64 aspect-square rounded-3xl object-cover"
        />
      </div>
      <div className="text-2xl 2xl:text-4xl py-5 2xl:py-7 font-semibold">
        {heading}
      </div>
      <div className="text-sm 2xl:text-xl secol leading-relaxed pb-12">
        {description}
      </div>
    </div>
  );
};

// const StoriesCard = ({ value, description }) => {

//   return (
//       <div className="w-48 bg-white rounded-3xl p-8 py-12">
//         <div className="text-6xl pb-4 relative">
//           {value}<span className="text-5xl absolute -top-1">+</span>
//         </div>
//         <div className="text-3xl">{description}</div>
//       </div>
//   );
// };

export default RevoCard;

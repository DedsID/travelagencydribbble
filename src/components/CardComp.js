import React from "react";

const RevoCard = ({ imageSrc, altText, heading, description }) => {
  return (
    <div>
      <div className="h-96 xl:w-96">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full rounded-3xl h-full object-cover"
        />
      </div>
      <div className="text-3xl 2xl:text-5xl py-5">{heading}</div>
      <div className="text-base 2xl:text-xl secol">{description}</div>
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

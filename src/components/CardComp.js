import React from 'react';

const RevoCard = ({ imageSrc, altText, heading, description }) => {
  return (
    <div>
      <div className="h-64 xl:w-64 2xl:w-72">
        <img src={imageSrc} alt={altText} className="w-full rounded-3xl h-full object-cover" />
      </div>
      <div className="text-5xl py-5">{heading}</div>
      <div className="text-xl secol">{description}</div>
    </div>
  );
};

const StoriesCard = ({ value, description }) => {
  return (
    <div className="flex gap-5 flex-grow">
      <div className="2xl:hidden w-48 bg-white rounded-3xl p-8 py-12">
        <div className="text-6xl pb-4 relative">
          {value}<span className="text-5xl absolute -top-1">+</span>
        </div>
        <div className="text-3xl">{description}</div>
      </div>
    </div>
  );
};

export default { RevoCard, StoriesCard };

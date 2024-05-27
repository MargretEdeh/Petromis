import React from "react";
import bgRectangle from "../assets/Images/BgRectangle.png"

export default function HeroSection() {
  return (
    <div className="w-full  relative">
      <img className="w-full relative  object-fill  object-center md:h-lvh h-72  "  src={bgRectangle} />
      {/* <div className="absolut inset-0 bg-black opacity-40"></div> */}
      <div className=" px-5 absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <p className=" md:text-5xl text-2xl z-10 shadow-2xl md:mt-10 mt-10 text-center font-semibold lg:w-[70%]">
          Empowering Industries, Energizing the Future
        </p>
        <p className="z-10 lg:w-1/3 text-center mt-5 md:mt-10">
          Leading the Way in Oil & Gas, Renewable Energy, Metals Recycling, and
          Transportation
        </p>
      </div>
    </div>
  );
}

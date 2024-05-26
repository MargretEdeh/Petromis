import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full relative px-5 object-fill object-center md:h-lvh h-72 bg-backgroundimg ">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex flex-col items-center font-poppins text-white  justify-center">
        <p className=" md:text-5xl text-2xl z-10 shadow-2xl md:mt-40 mt-20 text-center font-semibold md:w-[70%]">
          Empowering Industries, Energizing the Future
        </p>
        <p className="z-10 md:w-1/3 text-center mt-5 md:mt-10">
          Leading the Way in Oil & Gas, Renewable Energy, Metals Recycling, and
          Transportation
        </p>
      </div>
    </div>
  );
}

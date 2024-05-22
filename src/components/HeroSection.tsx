import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full relative  h-lvh bg-backgroundimg ">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex flex-col items-center font-poppins text-white  justify-center">
        <p className=" text-5xl z-10 shadow-2xl mt-40 text-center font-semibold w-[70%]">
          Empowering Industries, Energizing the Future
        </p>
        <p className="z-10 w-1/3 text-center mt-10">
          Leading the Way in Oil & Gas, Renewable Energy, Metals Recycling, and
          Transportation
        </p>
      </div>
    </div>
  );
}

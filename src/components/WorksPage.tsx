import React from "react";
import TheWorks from "./TheWorks";
import pic5 from "../assets/Images/pic5.png";
import pic6 from "../assets/Images/pic6.png"
import pic7 from "../assets/Images/pic7.png"
import Button from "./Button";

export default function WorksPage() {
  return (
    <div className="bg-white flex flex-col w-full py-10 px-5 md:px-10">
      <div className="flex flex-col items-center text-primary">
        <p className="font-bold text-xl md:text-3xl ">Works</p>
        <p className="text-xs md:text-base">A Unique Way Of Serving The Oil and Gas Industry</p>
      </div>
      <div className=" w-full flex flex-col items-center  gap-y-5 my-5 md:grid md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, i) => (
        <TheWorks
        key={i}
          img={pic6}
          bgcolor="primary"
          sub="Line Pipes & OCTG"
          content="Supply line pipes, drill pipes, tubulars and casings, structural steel, beams plates, fittings, flanges"
          link="/links"
        />
    ))}
       
      </div>
      <div className="flex my-5 justify-center"> <Button size="md" className="bg-primary font-semibold text-white rounded-md md:px-10 py-2 ">View All...</Button> </div>
    </div>
  );
}

import React from "react";
import TheWorks from "./TheWorks";
import pic5 from "../assets/Images/pic5.png";
import pic6 from "../assets/Images/pic6.png"
import pic7 from "../assets/Images/pic7.png"

export default function WorksPage() {
  return (
    <div className="bg-white flex flex-col w-full py-10 px-10">
      <div className="flex flex-col items-center text-primary">
        <p className="font-bold text-3xl ">Works</p>
        <p>A Unique Way Of Serving The Oil and Gas Industry</p>
      </div>
      <div className=" w-full gap-y-5 my-5 grid grid-cols-3">
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
    </div>
  );
}

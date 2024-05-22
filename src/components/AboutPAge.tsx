import React from "react";
import { Link } from "react-router-dom";
import { LiaFileDownloadSolid } from "react-icons/lia";
import pic1 from "../assets/Images/pic1.png";
import pic2 from "../assets/Images/pic2.png";
import pic3 from "../assets/Images/pic3.png";
import pic4 from "../assets/Images/pic4.png";

export default function AboutPAge() {
  return (
    <div className="w-full flex justify-between font-poppins px-10 py-20">
      <div className="w-1/2">
        <div className="text-primary flex flex-col gap-2 mb-10">
          <p className="font-semibold text-2xl"> About us</p>
          <p>A Unique Way Of Serving The Oil and Gas Industry</p>
        </div>
        <p>
          {" "}
          Petromis Energy Limited is a leading indigenous oil services company,
          focusing on the upstream sector of the West African oil & gas
          industry. By taking advantage of best practices across the industry,
          we are able to provide best-in-class services. By having a strong
          presence in the oil producing regions in Nigeria and West Africa,
          strengthened by turnkey capabilities through an extensive network of
          strategic technical partnerships and alliances, we are better placed
          to respond quickly and efficiently to our clients’ needs.
        </p>
        <div className="my-5 flex items-center gap-5">
          <Link className="text-primary font-semibold " to="/readmore">
            ReadMore
          </Link>
          <div className="text-secondary gap-2 font-bold flex items-center ">
            <LiaFileDownloadSolid className="text-3xl" />{" "}
            <p>Download Brochure</p>{" "}
          </div>
        </div>
      </div>
        <div className="relative w-[40%]  h-full grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-1">
            <img
              src={pic1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <img
              src={pic2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <img
              src={pic3}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={pic4}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
  );
}

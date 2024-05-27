import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { data } from "../constants/data";
// import "../constants/swipper-custom.css";
import Button from "./Button";

export default function ServicesPage() {
  return (
    <div className="bg-secondary font-poppins py-20 md:px-10">
      <div className="flex text-white flex-col items-center gap-3">
        <p className="font-bold text-xl md:text-3xl"> Services </p>
        <p className="text-sm md:text-base">Explore the our range of services</p>
      </div>
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {data.map((data) => (
            <SwiperSlide key={data.title}>
              <div
                className={`rounded my-2 gap-2 bg-${data.bgcolor} mx-8 flex items-center w-[310px] flex-col px-3 py-5 h-52 `}
              >
                <div className="text-3xl text-primary ">{data.icons} </div>
                <div className={`text-${data.text} flex flex-col text-sm items-center text-center`}>
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <p className="text-center">{data.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
      {data.map((data) => (  
              <div key={data.text}
                className={`rounded my-2 gap-2 bg-sub mx-8 flex items-center md:w-[310px] flex-col px-3 py-5 h-52 `}
              >
                <div className="text-3xl text-primary ">{data.icons} </div>
                <div className={`text-${data.text} flex flex-col text-sm items-center text-center`}>
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <p className="text-center">{data.content}</p>
                </div>
              </div>
          ))}
      </div>
      
      <div className="mx-auto flex my-10 text-white items-center justify-center">
        <Button size="md" className="rounded-2xl px-3 py-3 bg-primary">Get a Quote!</Button>
      </div>
      
    </div>
  );
}

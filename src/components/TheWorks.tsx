import React from "react";
import { Link } from "react-router-dom";

interface TheWorksProps {
  img: string;
  content: string;
  sub: string;
  link: string;
  bgcolor?:string
}

const TheWorks: React.FC<TheWorksProps> = ({ img, content, sub, link, bgcolor }) => {
  return (
    <div className=" w-[90%] shadow-2xl rounded-xl">
      <img className=" object-cover " src={img} />
      <div className="px-5 flex py-3  flex-col items-start font-semibold gap-3 ">
        <p className={`bg-${bgcolor} py-1 px-2 rounded-lg`}>{sub} </p>
        <p>{content} </p>
      </div>
      <div className=" flex p-3 text-primary justify-end ">  <Link to={link}>Learn more </Link>  </div>
    </div>
  );
};
export default TheWorks;

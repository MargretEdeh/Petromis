import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Truncate from './Truncate';

interface TheWorksProps {
  img: string;
  content: string;
  sub: string;
  link?: React.MouseEventHandler<HTMLButtonElement>;
  bgcolor?: string;
}

const TheWorks: React.FC<TheWorksProps> = ({
  img,
  content,
  sub,
  link, 
  bgcolor,
}) => {
  return (
    <div className=" md:w-[90%] md:h-96 shadow-2xl rounded-xl">
      <img className="object-cover w-full" src={img} />
      <div className="px-5 flex py-3  flex-col items-start font-semibold gap-3 ">
        <p className={`bg-${bgcolor} py-1 px-2 rounded-lg`}>{sub} </p>
       <Truncate className='hidden md:block'>{content} </Truncate>
       <span className='md:hidden'>{content} </span>
      </div>
       <div className=" flex p-3 text-primary justify-end ">
        {' '}
        <button className='hidden md:block' onClick={link}>Learn more </button>{' '}
      </div>
    </div>
  );
};
export default TheWorks;

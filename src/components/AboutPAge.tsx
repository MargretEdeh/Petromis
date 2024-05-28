import pic1 from '../assets/Images/pic1.png';
import pic2 from '../assets/Images/pic2.png';
import pic3 from '../assets/Images/pic3.png';
import pic4 from '../assets/Images/pic4.png';
import facebook from '../assets/Images/facebook.svg';
import insta from '../assets/Images/insta.svg';
import twitter from '../assets/Images/twitter.svg';

export default function AboutPAge() {
  return (
    <div className="w-full md:flex justify-between font-poppins px-5 py-5 md:px-10 md:py-20">
      <div className="md:w-1/2">
        <div className="text-secondary flex flex-col gap-2 mb-10">
          <p className="font-semibold text-xl md:text-2xl"> About us</p>
          <p className="text-sm md:text-base">
            Petromis Energy Limited provides innovative and comprehensive
            services across the oil and gas, renewable energy, metal recycling,
            transportation, and precious stone mining sectors, ensuring
            sustainable and efficient solutions for our clients in West Africa.
          </p>
        </div>
        <p>
          {' '}
          Petromis Energy Limited is a dynamic leader in the energy sector,
          offering a multifaceted approach to industry excellence. Specializing
          in the upstream sector of the West African oil & gas industry, we
          leverage best practices to deliver unmatched services. Our
          comprehensive portfolio extends beyond oil services, encompassing
          renewable energy solutions, metal recycling, transportation, and
          precious stone mining. With a formidable presence in Nigeria and
          throughout West Africa's oil-producing regions, fortified by strategic
          technical partnerships, we ensure agile and efficient responses to our
          clients' diverse needs. At Petromis, innovation meets versatility,
          driving sustainable growth and empowerment across the energy
          landscape.
        </p>
        <div className="my-5 flex justify-between items-center gap-5">
          <p className="text-primary font-semibold ">Contact Us</p>
          <div className="flex  items-center gap-5">
            <img className=" w-5 md:w-10" src={facebook} />
            <img className=" w-5 md:w-10" src={insta} />
            <img className=" w-5 md:w-10" src={twitter} />
          </div>
        </div>
      </div>
      <div className="relative md:w-[40%]  h-full grid grid-cols-2 grid-rows-2 gap-2">
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

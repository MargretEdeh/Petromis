
import facebook from "../assets/Images/facebook.svg";
import insta from "../assets/Images/insta.svg";
import twitter from "../assets/Images/twitter.svg";

export default function Footer() {
  return (
    <div className="bg-secondary px-10 py-5 gap-5  flex flex-col ">
      <div className="text-primary font-semibold hidden  md:flex items-center justify-between">
        <p>Quick Links</p>
        <p>Contacts</p>
        <p>Social Links</p>
      </div>
      <div className="md:flex hidden  justify-between">
        <div className=" text-white flex flex-col gap-4">
          <p>About Petromis</p>
          <p>Services</p>
          <p>Get Quote</p>
        </div>
        <div className="  text-white hidden md:flex flex-col gap-3 justify-center">
          <p>info@petromis-energy.com</p>
          <p>+447958208835, +2347031248674</p>
        </div>
        <div className=" md:flex hidden flex-col gap-5 ">
          <div className="flex items-center gap-5">
            <img className=" w-10" src={facebook} />
            <img className=" w-10" src={insta} />
            <img className=" w-10" src={twitter} />
          </div>
          <a href="#" className="text-primary text-xs ">
            Subscribe for our Newsletter
          </a>
        </div>
      </div>
      <div className="md:flex hidden justify-end my-5">
        <input
          type="text"
          className="bg-primary text-white placeholder:text-white font-semibold text-sm py-2 rounded-l-md px-5"
          placeholder="Email Address"
        />
        <button className="py-2 px-5 rounded-r-md bg-white text-primary font-semibold text-sm">
          Subscribe
        </button>
      </div>
      <div className="block md:hidden">
        <p className="text-primary font-semibold text-sm">Quick Links</p>
        <div className=" text-white text-xs my-2 flex flex-col gap-4">
          <p>About Petromis</p>
          <p>Services</p>
          <p>Get Quote</p>
        </div>
      </div>
      <div className="block md:hidden" >
        <p className="text-primary font-semibold text-sm">Services</p>
        <div className=" text-white text-xs my-2 flex flex-col gap-4">
          <p>info@petromis-energy.com</p>
          <p>+447958208835, +2347031248674</p>
        </div>
      </div>
      <div className="block md:hidden">
        <p className="text-primary font-semibold text-sm">Social Links</p>
        <div className="flex items-center my-5 gap-5">
            <img className=" w-5" src={facebook} />
            <img className=" w-5" src={insta} />
            <img className=" w-5" src={twitter} />
          </div>
          <a href="#" className="text-primary flex justify-end text-xs ">
            Subscribe for our Newsletter
          </a>
      </div>
      <div className="flex text-xs md:hidden  my-5">
        <input
          type="text"
          className="bg-primary px-2 text-white text-xs placeholder:text-white font-semibold  py-2 rounded-l-md md:px-5"
          placeholder="Email Address"
        />
        <button className="py-2 px-2 md:px-5 rounded-r-md bg-white text-primary font-semibold text-xs">
          Subscribe
        </button>
      </div>
    </div>
  );
}

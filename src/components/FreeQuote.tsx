
import ovalpic from "../assets/Images/ovalpic.png"

export default function FreeQuote() {
  return (
    <div className='md:px-10 px-5 py-20 flex flex-col md:flex-row items-center justify-between w-full'>
        <div className='md:w-1/2'>
            <div className='text-secondary' >
                <p className='text-2xl font-bold'>Get Free Quote</p>
                <p>Get a Free Quote and Let's Make It Happen</p>
            </div>
            <form className='flex my-5 flex-col gap-3'>
                <input className=' bg-gray-100 px-3 py-2 rounded-lg' placeholder='fullname' type='text' />
                <input className=' bg-gray-100 px-3 py-2 rounded-lg' placeholder='Email Address' type='email' />
                <input className=' bg-gray-100 px-3 py-2 rounded-lg' placeholder='phone Numer' />
                <textarea className=' bg-gray-100 px-3 py-2 h-32 rounded-lg' placeholder='comments' />
                <button className='bg-primary px-3 py-2 text-white font-semibold rounded-lg' >Send a Message</button>
            </form>

        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
            <img className='   border-8 shadow-2xl object-cover rounded-tl-full border-secondary md:w-[70%]' src={ovalpic} alt='pic'/>
        </div>
    </div>
  )
}

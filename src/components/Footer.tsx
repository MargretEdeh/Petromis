import React from 'react'
import facebook from "../assets/Images/facebook.svg"
import insta from "../assets/Images/insta.svg"
import twitter from "../assets/Images/twitter.svg"

export default function Footer() {
  return (
    <div className='bg-secondary px-10 py-5 gap-5  flex flex-col '>
      <div className='text-primary font-semibold  flex items-center justify-between'>
        <p>Quick Links</p>
        <p>Contacts</p>
        <p>Social Links</p>
      </div>
      <div className='flex  justify-between'>
        <div className=' text-white flex flex-col gap-4'>
          <p>About Petromis</p>
          <p>Services</p>
          <p>Get Quote</p>
        </div>
        <div className='  text-white flex flex-col gap-3 justify-center'>
          <p>info@petromis-energy.com</p>
          <p>+447958208835, +2347031248674</p>
        </div>
        <div className=' flex flex-col gap-5 '>
          <div className='flex items-center gap-5'>
          <img className=' w-10' src={facebook}/>    
          <img className=' w-10'  src={insta}/>    
          <img className=' w-10'  src={twitter}/> 
          </div>   
          <a href='#' className='text-primary text-xs '>Subscribe for our Newsletter</a>  
        </div>
      </div>
      <div className='flex justify-end my-5'>
        <input type='text' className='bg-primary text-white placeholder:text-white font-semibold text-sm py-2 rounded-l-md px-5' placeholder='Email Address' />
        <button className='py-2 px-5 rounded-r-md bg-white text-primary font-semibold text-sm'>Subscribe</button>
      </div>
    </div>
  )
}

import React from 'react'
import Logo from '../../Images/Logo-removebg-preview.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className='absolute inset-x-0 bottom-0 '>
      <div className='text-center mr-10'>
        <div>
        <img src={Logo} className="h-20 float-left ml-3 " alt={"Logo"} /> 
        </div>
        <div >
          <a href="#" className='text-xl mr-5 text-primary  hover:text-secondary no-underline hover:underline ' >Home</a>
          <a href="#" className='text-xl mr-5 text-primary  hover:text-secondary no-underline hover:underline '>About</a>
          <a href="#" className='text-xl mr-5 text-primary  hover:text-secondary no-underline hover:underline '>Contact</a>
          <a href="#" className='text-xl text-primary  hover:text-secondary no-underline hover:underline '>Blog</a>
        </div>
        <div >
          <a href="#" className='text-sm text-primary  hover:text-secondary no-underline hover:underline '>Privacy Policy |</a>
          <a href="#" className='text-sm text-primary  hover:text-secondary no-underline hover:underline '> Volunteer |</a>
          <a href="#" className='text-sm text-primary  hover:text-secondary no-underline hover:underline '> News</a>
        </div>
        <div className='-mt-10'>
          <FaInstagram className='fill-secondary h-9 w-6 float-right' />  
          <FaTelegramPlane className=' fill-secondary h-9 w-6 mr-5 float-right' />
          <FaTwitter className='fill-secondary h-9 w-6 mr-5 float-right' />
          <FaFacebookF className='fill-secondary h-9 w-4 mr-5 float-right' />
        </div>
      </div>
     
    </footer>  
  )
}

export default Footer
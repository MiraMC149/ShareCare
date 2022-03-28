import React from 'react'
import Logo from '../../Images/Logo-wo est.png'
const Navbar=()=> {
  return (
    <nav className='absolute bg-transparent inset-x-0 top-0  '>  
      <div >
          <img src={Logo} className="h-20 float-left ml-10 mt-3" alt={"Logo"} /> 
      </div>
      
      <div className='mr-20 mt-10'> 
     
          <a href='#' className='text-xl mr-10 float-right text-primary font-regular  hover:text-secondary no-underline hover:underline '>Blog</a>  
          <a href='#'  className='text-xl mr-10  float-right text-primary font-regular hover:text-secondary no-underline hover:underline'>Contact</a>  
          <a href='#'  className='text-xl mr-10 float-right text-primary font-regular hover:text-secondary no-underline hover:underline'>About</a> 
          <a href='#' className='text-xl mr-10 float-right text-primary font-regular hover:text-secondary no-underline hover:underline'>Home</a>  

      </div>   
    </nav>
  )
}

export default Navbar
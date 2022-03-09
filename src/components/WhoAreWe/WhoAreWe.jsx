import React from 'react'
import aboutImg from '../../Images/aboutUs.jpg' 
function WhoAreWe() {
  return (
    <div className='flex'> 
        <p className="bg-primary text-white text-3xl" > Who are we?  </p>
        <img src={aboutImg} className="h-20 float-right" alt={aboutImg}> </img>
    </div>
  )
}

export default WhoAreWe
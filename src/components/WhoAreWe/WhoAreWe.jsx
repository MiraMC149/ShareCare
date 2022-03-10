import React from 'react'
import aboutImg from '../../Images/aboutUs.jpg' 

const WhoAreWe = () => {
  return (
    <div className='flex'> 
    <p className="text-2xl" >hsdhfisfn</p>
        <p className="text-2xl bg-primary text-white "> Who are we?  </p>
        <img src={aboutImg} className="h-20 float-right" alt={"aboutImg"} /> 
    </div>
  )
}
export default WhoAreWe;
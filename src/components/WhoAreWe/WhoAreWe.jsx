import React from 'react'
import aboutImg from '../../Images/aboutUs.jpg' 
import WhoAreWeBanner from './WhoAreWeBanner'

const WhoAreWe = () => {
  return (
    <div className='flex mb-16'> 
        <WhoAreWeBanner />
        <div className='static mt-ptop ml-minus'>
        <div className='box1'></div>
        <div className='box2 flex flex-row'>
          <div className='bg-white mt-16 '>
          <p className=' text-3xl bg-white ml-12 w-2/3'>We’re a group of people passionate about feeding the hungry and reducing food waste</p>
          <p className='text-secondary text-2xl bg-white ml-12 mt-5'>Meet the team!</p>
          </div>
          <img src={aboutImg} className="h-auto float-right mt-4 relative w-1/3 mr-12 " alt={"aboutImg"} /> 
        </div>

        </div>
    </div>
  )
}
export default WhoAreWe;
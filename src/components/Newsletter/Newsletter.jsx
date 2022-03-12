import React from 'react'
import phoneImg from '../../Images/newsletter.png' 
import Subscribe from './Subscribe'
import SignUp from './SignUp'

const Newsletter = () => {
  return (
    <div className='flex -mb-4 '> 
        <Subscribe />
        <div className='static mt-ptop ml-minus'>
        <div className='box3'></div>
        <div className='box4 flex flex-row'>
          <div className='bg-white mt-16 w-2/3'>
          <p className=' text-3xl bg-white ml-12 text-paramount '>Hello!</p>
          <p className=' text-3xl bg-white ml-12 text-paramount '>Enter your email</p>
          <input type='text' className='bg-bluebase w-56'></input>
          <p className=' text-2xl bg-white ml-12 mt-5 text-paramount '>Enter your password</p>
          <input type='password' className='bg-bluebase w-56'></input>
          <p className='text-paramount bg-white'>Upload a photo avatar</p>
          <SignUp />
          <p className='bg-white'>Already a user? <span className='text-secondary bg-white'>Log in</span></p>
          </div>
          <img src={phoneImg} className="h-5/6 float-right mt-7 relative w-3/6 mr-12 bg-white " alt={"phoneImg"} /> 
        </div>

        </div>
    </div>
  )
}
export default Newsletter;
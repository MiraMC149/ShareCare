import React from 'react'
import BgBanner from '../WhoAreWe/BgBanner.jsx'
import logoLeft from '../../Images/donation.jpg'
import {signInGoogle} from '../../firebase.js'

function WhatCanYouDo() {
  return (
    <div>
        <div className='relative mt-64 '>
        <p className='text-white text-2xl pt-6 ml-6 mt-1 absolute bg-transparent z-10'> Donations </p>
        <BgBanner /> 
        </div>
        <div className='flex flex-row'>
            <div className='w-2/4 '>
                <img src={logoLeft} />
            </div>
            <div className='flex flex-col -ml-32 w-2/4 mt-10 text-3xl'>
            <div className='box5'></div>
            <div className='box6'>
                <p className='bg-transparent w-1/2 font-thin ml-20 mt-4 '>We encourage people to donate food even if it’s a limited quantity of food</p>
                <center className='bg-transparent mt-16'><button onClick={signInGoogle} className='bg-secondary px-8 py-3 rounded-lg text-white' href=''>Donate</button></center>
            </div> 
            </div>  
        </div>
    </div>
  )
}

export default WhatCanYouDo
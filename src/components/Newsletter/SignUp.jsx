import React from 'react'
import {signInGoogle} from '../../fireba'

function SignUp() {
  return (
    <div className='bg-transparent -mt-8 ml-3'><button onClick={signInGoogle}  className='bg-secondary text-white w-32 text-center rounded-md text-2xl ml-48 mt-4 mb-4 '> Sign Up </button>  </div>
  )
}

export default SignUp
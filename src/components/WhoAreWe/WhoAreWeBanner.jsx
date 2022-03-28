import React from 'react'
import BgBanner from './BgBanner'

function WhoAreWeBanner() {
  return (
    <div className="flex bg-primary">
        <p className="text-2xl text-white z-50 bg-primary absolute ml-6 mt-7" > Who are we?  </p>
        <BgBanner />
    </div>
  )
}

export default WhoAreWeBanner
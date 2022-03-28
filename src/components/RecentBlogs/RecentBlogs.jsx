
import logo from '../../Images/foodDonation.jpg'
import logo2 from '../../Images/voluntering.jpg'
import BgBanner from '../WhoAreWe/BgBanner.jsx'

const RecentBlogs = () => {

  return (
    <div>

      <div className='relative mt-64 '>
      <p className='text-white text-2xl pt-6 ml-6 mt-1 absolute bg-transparent z-10'> Recent blogs </p>
        <BgBanner /> 
      </div>

     <div className='mb-20'>

      <div className=' flex translate-x-32  '>

        <div className='w-2/5 h-96 m-0.5  bg-secondary text-center text-5xl text-secondary'>
          <br />

          <div className='w-2/5 h-96 bg-white absolute ml-6 flex-none '>
            <div className='justify-center flex bg-transparent'>
            <img src={logo} className='w-4/5 p-5 mt h-80 rounded bg-transparent'  />
            </div>
            <p className='bg-transparent'>Sanitary precautions</p>
          </div>
       
        </div>
      
      

        <div className='w-2/5 h-96 m-0.5  bg-secondary mx-20 text-center text-5xl text-secondary' >
          <br />

          <div className='w-2/5 h-96 bg-white absolute ml-6'>
          <div className='justify-center flex bg-transparent'>
            <img src={logo2} className='w-4/5 p-5 mt h-80 bg-transparent' />
            </div>
           <p className='bg-transparent'> Sanitray precautions </p>

          </div>
        </div>

      </div>

      </div>

    </div>




  )

}
export default RecentBlogs;

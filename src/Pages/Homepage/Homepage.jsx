import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import frontImg from '../../Images/meal-gathering.jpg';
import WhoAreWe from '../../components/WhoAreWe/WhoAreWe.jsx';
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs.jsx';
import WhatCanYouDo from '../../components/WhatCanYouDo/WhatCanYouDo.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';


const Homepage = () =>{
    return (
      <div className="flex flex-col overflow-hidden" >
        <Navbar />
        <img  className='relative mt-24 mb-4' src={frontImg} />
        <WhoAreWe /> 
        <RecentBlogs /> 
        <WhatCanYouDo />
        <Newsletter /> 
        <Footer /> 
      </div>
    );
  }
  export default Homepage;

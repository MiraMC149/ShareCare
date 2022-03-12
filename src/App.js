import './index.css';
import frontImg from './../src/Images/meal-gathering.jpg';
import WhoAreWe from './../src/components/WhoAreWe/WhoAreWe.jsx';
//import Navbar from './../src/components/Navbar/Navbar.jsx';
import Newsletter from './../src/components/Newsletter/Newsletter.jsx'

const App = () =>{
  return (
    <div className="flex flex-col ">
      <img src={frontImg} className="w-prd h-17 mb-p20" alt={"frontImg"} />
      {/* <WhoAreWe /> */}
      <Newsletter />
    </div>
  );
}
export default App;


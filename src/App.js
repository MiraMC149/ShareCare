import './index.css';
import frontImg from './../src/Images/meal-gathering.jpg';
import WhoAreWe from './../src/components/WhoAreWe/WhoAreWe.jsx';
//import Navbar from './../src/components/Navbar/Navbar.jsx';

const App = () =>{
  return (
    <div className="bg-mainbg">
      <img src={frontImg} className="w-prd h-17 mb-p20" alt={"frontImg"} />
      <WhoAreWe />
    </div>
  );
}
export default App;


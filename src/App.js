import './index.css';
import React from 'react'
import frontImg from './../src/Images/meal-gathering.jpg';
import WhoAreWe from './../src/components/WhoAreWe/WhoAreWe.jsx';
import Navbar from './../src/components/Navbar/Navbar.jsx';

function App(){
  return (
    <div className="bg-mainbg">
      <Navbar />
      <img src={frontImg} className="w-full h-23" alt={frontImg}/>
      
      <WhoAreWe />
    </div>
  );
}

export default App;

import React from 'react';
// import Card from '../components/Card';
import Slider from '../components/Slider';
import './North.scss';
// import manali from '../assets/manali.jpg'
// import shimla from '../assets/shimla.jpg'
import kullu from '../assets/kullu.jpg'
import dal from '../assets/dal.jpg'
// import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import Right from '../components/Right';
import Left from '../components/Left';
import hfour from '../assets/shimla.jpg'
import ld from '../assets/ld.jpg'
import Navbar from '../components/Navbar';


function North() {
  
  const slides=[
    {url:'http://localhost:3000/hp.jpg', title:'Himachal pradesh' , description:"A destination for all seasons and all reasons"},
    {url:'http://localhost:3000/ut.jpg', title:'Uttrakhand', description:"A destination for all seasons and all reasons"},
    {url:'http://localhost:3000/ld.jpg', title:'Ladakh',description:"A destination for all seasons and all reasons"},
    {url:'http://localhost:3000/jk.jpg', title:'Jammu & Kashmir',description:"A destination for all seasons and all reasons"},
  ]

  //  const card1=[
  //   {url:'http://localhost:3000/hp.jpg', title:'manali'}
  //  ]

  //  const card2=[
  //   {url:'http://localhost:3000/hp.jpg', title:'shimla'}
  //  ]

  //  const card3=[
  //   {url:'http://localhost:3000/hp.jpg', title:'kullu'}
  //  ]

  //  const card4=[
  //   {url:'http://localhost:3000/hp.jpg', title:'dalhousie'}
  //  ]
   
  //  const navigate=useNavigate();



  return (
    <div className="northnorth">
       <div className="navcontainer">
         <Navbar/>
       </div>
      <div className="northslidercontainer">
          <Slider slides={slides}/>
      </div>
       
       <div className="northrightcontainer">
          <Heading/>
          <Right section='North India'  title="Himachal Pradesh" image={hfour}  />
          <Left section='North India'  title="Uttrakhand" image={kullu}/>
          <Right section='North India'  title="Ladakh" image={ld}/>
          <Left section='North India'  title="Jammu & Kashmir" image={dal }/>
          <Right section='North India'  title="Offbeats" image={kullu}/>
         

       </div>

      
    </div>
  )
}

export default North
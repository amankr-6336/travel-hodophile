import React from 'react'
// import Card from '../components/Card';
import Slider from '../components/Slider';
import './Northeast.scss'
import kullu from '../assets/assam.jpg'
import dal from '../assets/arunachal.jpg'
// import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import Right from '../components/Right';
import Left from '../components/Left';
import hfour from '../assets/sikkim.jpg'
import ld from '../assets/meghalaya.jpg'
import Navbar from '../components/Navbar';
import ss from '../assets/ss.jpg'
import sas from '../assets/sas.jpg'
import smg from '../assets/smg.jpg'
import sapp from '../assets/sapp.jpg'

function NorthEast() {
     
    const slides=[
        {url:ss, title:'Sikkim' , description:"A destination for all seasons and all reasons"},
        {url:sas, title:'Assam', description:"A destination for all seasons and all reasons"},
        {url:smg, title:'Meghalaya',description:"A destination for all seasons and all reasons"},
        {url:sapp, title:'Arunachal Pradesh',description:"A destination for all seasons and all reasons"},
      ]
  
      // const navigate=useNavigate();

  return (
    <div className="east">
    <div className="eastnavcontainer">
      <Navbar/>
    </div>
   <div className="eastslidercontainer">
       <Slider slides={slides}/>
   </div>
    
    <div className="eastrightcontainer">
       <Heading/>
       <Right section='Northeast India' title="Sikkim" image={hfour}/>
       <Left section='Northeast India'  title="Assam" image={kullu}/>
       <Right section='Northeast India'  title="Meghalaya" image={ld}/>
       <Left section='Northeast India'  title="Arunachal Pradesh" image={dal }/>
       <Right section='Northeast India'  title="Offbeats" image={kullu}/>
      

    </div>

   
 </div>
  )
}

export default NorthEast;
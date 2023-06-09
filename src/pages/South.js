import React from 'react'
// import Card from '../components/Card';
import Slider from '../components/Slider';
import "./South.scss";
// import manali from '../assets/manali.jpg'
// import shimla from '../assets/shimla.jpg'
import kullu from '../assets/ker.jpg'
import dal from '../assets/pondi.jpg'
// import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import Right from '../components/Right';
import Left from '../components/Left';
import hfour from '../assets/tamil1.jpg'
import ld from '../assets/kar.jpg'
import Navbar from '../components/Navbar';
import st from '../assets/st.jpg'
import sk from '../assets/sk.jpg'
import skt from '../assets/skt.jpg'
import sp from '../assets/sp.jpg'

function South() {
     
    const slides=[
        {url:st, title:'Tamil Nadu' , description:"A destination for all seasons and all reasons"},
        {url:sk, title:'Kerala', description:"A destination for all seasons and all reasons"},
        {url:skt, title:'Karnataka',description:"A destination for all seasons and all reasons"},
        {url:sp, title:'Pondicherry',description:"A destination for all seasons and all reasons"},
      ]
  
      // const navigate=useNavigate();

  return (
    <div className="south">
    <div className="southnavcontainer">
      <Navbar/>
    </div>
   <div className="southslidercontainer">
       <Slider slides={slides}/>
   </div>
    
    <div className="southrightcontainer">
       <Heading/>
       <Right section='South India' title="Tamil nadu" image={hfour}/>
       <Left section='South India'  title="Kerala" image={kullu}/>
       <Right section='South India'  title="Karnataka" image={ld}/>
       <Left section='South India'  title="Pondicherry" image={dal }/>
       <Right section='South India'  title="Offbeats" image={kullu}/>
      

    </div>

   
 </div>
  )
}

export default South
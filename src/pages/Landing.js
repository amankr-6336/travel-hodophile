import React from 'react'
import './Landing.scss'

import ln from '../assets/ln.jpg'
import ls from '../assets/ls.jpg'
import lne from '../assets/lne.jpg'
import logo from '../assets/logot.png'

import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate=useNavigate();
  return (
     
    <div className="landing">
      {/* <div className="landingimage">
        <img src={ld} alt="" />
      </div> */}
        <div className="containerlanding">
            <div className="landingquote">
               <img  className='landinglogoo' src={logo} alt="" />
               <h4 id='ok1'>Welcome to Hodophile</h4>
               <h1 id='ok2'>Find your perfect destination</h1>
            </div>
            <div className="centerlandingsection">
               <div className="place">
                <div id="place1" onClick={()=>navigate("/north")}><img src={ln} alt="" /></div>
                <h3 className='zone'>North india</h3>
                </div>
                <div className="place">
                <div id="place2"  onClick={()=>navigate("/South")}><img src={ls} alt="" /></div>
                <h3 className='zone'>South india</h3>
                </div>
                <div className="place">
                <div id="place3"  onClick={()=>navigate("/NorthEast")}><img src={lne} alt="" /></div>
                <h3 className='zone'>NorthEast india</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing;
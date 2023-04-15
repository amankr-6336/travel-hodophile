import React, { useState } from 'react';
import minilogo from "../assets/minilogo.png"
import {BsEnvelope} from "react-icons/bs"
import './Navbar.scss'
import logo from '../assets/logot.png'
import {  Link } from 'react-router-dom';


function Navbar() {
     
  
    const[cross,setcross]=useState(false);

    function handlemenu(){
        setcross(!cross);
    }

  return (
    <div className='main'>
    <div className={cross?"navbar2":"navbar"}>
        <div className="innernavbar" >
            <div className="minilogo">  
            <img src={minilogo} alt="" />     
            </div>

            <div className={cross? "hamburger2":"hamburger"} onClick={handlemenu}>
                <div className="innerham">
                    <div id="div1"></div>
                    <div id="div2"></div>
                </div>    
            </div>

            <div className="message">
                <BsEnvelope/>
            </div>
        </div>
       
    </div>

     <div className={cross? "outernavbar2":"outernavbar"}>
     <div className="logoout">
        <img src={logo} alt="" />
        </div>
            <div className="list">
          
                <ul>
                    <li  > <Link className='link' to='/'>Home</Link> </li>
                    <li ><Link className='link' to='/north'>North</Link></li>
                    <li > <Link className='link' to='/NorthEast'>NorthEast</Link></li>
                    <li > <Link className='link' to='/South'>South</Link></li>
                    <li  > <Link className='link' to='/'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
        </div>
  )
}

export default Navbar
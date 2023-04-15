import React from 'react'
import './Heading.scss'
import lt from '../assets/logot.png'
import {BsArrowDown} from  "react-icons/bs"

function Heading() {


  function handlescroll(){
      window.scrollBy({ behavior: 'smooth', top:600 });
  }

  return (
    <div className="headingfront">
        <div className="logo"><img src={lt} alt="" /></div>
        <h5 className='welcome'> Welcome to Hodophile</h5>
        <h1 id='about'>Find your perfect destination</h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nemo.</p>
        <div className="scroll" onClick={handlescroll}><button>SCROLL</button><BsArrowDown className='arrowdown'/></div>
    </div>
  )
}

export default Heading
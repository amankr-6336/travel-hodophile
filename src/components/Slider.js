import React, { useState } from 'react'
import './Slider.scss';
import {AiOutlineLeft} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";

function Slider({slides}) {
    const[currentIndex,setCurrentIndex]=useState(0);
   
    // const slideStyle={
    //     width:"100%",
    //     height:"100%",
      
    //     backgroundPosition:"center",
    //     backgroundSize:"cover",
    //     // backgroundImage:`url(${slides[currentIndex].url})`,
    //     animation:"fade 2s linear",

      
        
        
    // }
    
    function goToPrevious(){
      const isFirstSlide=currentIndex===0;
      const newIndex=isFirstSlide?slides.length -1:currentIndex-1;
      setCurrentIndex(newIndex);
    }

    function goToNext(){
        const isLastSlide=currentIndex===slides.length-1;
        const newIndex=isLastSlide?0:currentIndex+1;
        setCurrentIndex(newIndex);
    }

    // function goToSlide(slideIndex){
    //   setCurrentIndex(slideIndex);
    // }

    // function handlechange(){
    //   console.log(1);
    // }

   

  return (
    <div className="outerbox">
         <div className="leftarrow" onClick={goToPrevious}><AiOutlineLeft/></div>
         <div className="rightarrow" onClick={goToNext}><AiOutlineRight/></div>
        <div className="innerbox" >
        <img className='im fade' src={slides[currentIndex].url} alt="" />
        <div className="content">
         <h1 className='placename'>{slides[currentIndex].title}</h1>
         <p className='aboutplace'>{slides[currentIndex].description}</p>
         </div>
        {/* <div className="dot" >
            {slides.map((slide,slideIndex) => (
                <div key={slideIndex} className="dots" onClick={() => goToSlide(slideIndex)}><GoPrimitiveDot/></div>
            ))}
        </div> */}

        </div>
    </div>
  )
}

export default Slider
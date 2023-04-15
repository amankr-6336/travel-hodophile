import React from 'react'
import Slider from '../components/Slider';
import './Himachal.scss'

function Himachal() {
    const slides=[
        {url:'http://localhost:3000/h1.jpg', title:'hp'},
        {url:'http://localhost:3000/h2.jpg', title:'nei'},
        {url:'http://localhost:3000/h3.jpg', title:'si'},
        {url:'http://localhost:3000/h4.jpg', title:'si'},
      ]
  return (
     <div className="himachal">
         <div className="slidercontainer">
          <Slider slides={slides}/>
      </div>
     </div>
  )
}

export default Himachal
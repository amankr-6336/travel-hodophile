import React from 'react'
import ld from '.././assets/ld.jpg'
import './Card.scss'
import Slider from './Slider'

function Card(props) {

  const slides=[
    {url:'http://localhost:3000/hp.jpg', title:'hp'},
    {url:'http://localhost:3000/ut.jpg', title:'nei'},
    {url:'http://localhost:3000/ld.jpg', title:'si'},
    {url:'http://localhost:3000/jk.jpg', title:'si'},
  ]
  return (
    <div className="Card">
         {/* <img src={props.url} alt="" /> */}
          <Slider slides={slides}/>
        <div className="leftsidecard">
             <h4 className='location'>{props.title}</h4>
        </div>
       
    </div>
  )
}

export default Card
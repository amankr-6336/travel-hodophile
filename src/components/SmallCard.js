import React from 'react'
import './SmallCard.scss'
import s from  '../assets/ld.jpg'

function SmallCard() {
  return (
     <div className="smallcard">
        <div className="imagecard">
            <img src={s} alt="" />
        </div>
        <div className="textcard">
            <h4 id='offname'>hi i m heading</h4>
            <p id='offnameline'>hii i m not heading</p>
             <div className="button">
                <button className='hover'>Hover me</button>
                <button className='Read'> Read more</button>
             </div>
        </div>
     </div>
  )
}

export default SmallCard
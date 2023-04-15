import React from 'react'
import hp from '../assets/kullu.jpg'
import './Right.scss'
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Right(props) {
  const navigate=useNavigate()
  return (
    <div className="right">
        <div className="rightinner">
            <div className="text">
            <div className="innertext">
              <h4 className='area'>{props.section}</h4>
              <div className="state">{props.title}</div>
              <div className="discover"><button onClick={()=> navigate("/north/himachal/manali")}>Discover</button><BsArrowRight id='rightarrow'/></div>
              </div>
            </div>
            <div className="pic">
                 <img src={props.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Right
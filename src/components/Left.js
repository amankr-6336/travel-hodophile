import React from 'react'
import "./Left.scss"
import {BsArrowLeft} from 'react-icons/bs'

function Left(props) {
  return (
    <div className="left">
        <div className="leftinner">
            <div className="text">
            <div className="innertext">
              <h4 className='area'>{props.section}</h4>
              <div className="state">{props.title}</div>
              <div className="discover"><button>Discover</button><BsArrowLeft id='leftarrow'/></div>
              </div>
            </div>
            <div className="pic">
                 <img src={props.image} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Left
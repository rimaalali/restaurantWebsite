import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { PiSmileyWinkDuotone } from "react-icons/pi";
import './Logo.css'
import img from '../../assets/logo.png'
export default function Logo() {
  return (
    <div className='logoContener'>
     
<img src={img} alt='sugar & salt' className='ss'/>
        
    
 
<div className="marquee-container">
  <div className="marquee-text">
    The Restaurant is ready to service you and receive your orders from 8:00AM to 11:00PM <PiSmileyWinkDuotone />
  </div>
  
</div>
    </div>
  )
}

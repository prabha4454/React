import React from 'react'
import "./style/items.css"
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

export const Items = (props) => {
    const { title, img } = props;
  return (
 <ScrollAnimation animateIn="zoomIn" delay="100"   animateOnce="true" className='item col-md-5 col-lg-3  mx-auto text-center bg-white'>
    
        <div className="item-image">
            <img src={img} alt={title} />
            </div>
            <div className="item-content">
                <h2>{title}</h2>
                <p>{props.children}</p>
                </div>
        
        </ScrollAnimation>
  
  )
}

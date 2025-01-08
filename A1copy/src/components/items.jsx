import React from 'react'
import "./style/items.css"

export const Items = (props) => {
    const { title, img } = props;
  return (

    <div className="item col-md-5 col-lg-3  mx-auto text-center bg-white">
        <div className="item-image">
            <img src={img} alt={title} />
            </div>
            <div className="item-content">
                <h2>{title}</h2>
                <p>{props.children}</p>
                </div>
        </div>
  
  )
}

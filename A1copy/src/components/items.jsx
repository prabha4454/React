import React from 'react'

export const Items = (props) => {
    const { title, img } = props;
  return (

    <div className="item col-md-6">
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

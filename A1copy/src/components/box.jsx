import React from 'react'
import "./style/box.css"

export const Box = (props) => {

  return (
    <>
    <div className="box row ">
        {props.children}
    </div>
    </>
  )
}

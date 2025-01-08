import React from 'react'

export const Service = (props) => {
  return (
    <>
    <div className="services pb-5">
      <h1 className='text-center pt-5 pb-5' style={{fontSize:"40px"}}>Services</h1>
    <div className=" row gap-4">
{props.children}
    </div>
    </div>
   
    </>
  )
}



import PropTypes from "prop-types"
import { use } from "react";
import { useState } from "react";

 const Td = (props) => {
  const {item,index,edit,del}=props
  const [dep,setdep]=useState(item.dep)
    
  return (
   <>
   <tr className='text-center align-middle' key={index}>
  
    <td >{item.index}</td>
    <td >{item.name}</td>
    <td >{item.reg}</td>
    <td >{item.status}</td>
   
    <td > <input type="text" value={dep}  className="border-0 outline-0 bg-transprent text-center" onChange={(e)=>setdep(e.target.value)}/></td>
 
    <td className='d-flex gap-2 justify-content-center'>
      <button className='btn' onClick={edit}><i className="bi bi-pencil text-primary"></i></button> 
    <button className='btn'onClick={del} type='button' ><i className="bi bi-trash3 text-danger"></i></button>
    </td>
    
  
    </tr>
  
   
   </>
  )
};


/* Td.prototype={
  item:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      quant:PropTypes.number.isRequired,
      price:PropTypes.number.isRequired
      
    })

  ).isRequired
};

Td.defaultProps={
  item:{
    id:0,
    name:'no product',
    quant:0,
    price:0,
  }
}
 */

 

export default Td;
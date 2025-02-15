import React from 'react'
import { Button } from 'react-bootstrap'
import img9 from './f.jpg';
import Navebar from './Navebar';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Buypage = () => {

    
  return (
    <>
    <Navebar />
    <div className='b' style={{width:'90%',height:'400px',margin:'60px'}}>
        <div className='ba' style={{width:'50%',height:'400px',float:'right',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='t' style={{margin:'30px',}}>
                <h1>Earbuds</h1><br></br>
                <h4>Rs. 2000</h4><br></br>
                <ul>
                    <li>one </li>
                    <li>Two </li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                    <li>Six </li>
                    <li>Seven</li>
                </ul>
                <Link to="/About"><Button variant="outline-secondary">Online</Button>{' '}</Link>
            
                <Link to="/Adress">  <Button variant="outline-info">C O  D</Button>{' '}</Link>
            </div>
            
        </div>
        <div className='bb'  style={{width:'50%',height:'400px',float:'left'}}>
        <img src={img9} style={{width:'370px',height:'370px',margin:'10px 0px 0px 150px',borderRadius:'10px'}} alt='/' />
            <div className='im'>
            <Link to="/Home"> <Button variant="outline-warning">Home <FaHome /></Button>{' '}</Link>
            </div>

        </div>

    </div>
    </>
  )
}

export default Buypage
import React from 'react'
import './survelliance.css'
import img17 from './l.jpg';
import img23 from './p.jpg';
import img24 from './q.jpg';
import img2 from './zoom.jpg';
import img3 from './zeb.jpg';
import img4 from './zeb2.jpg';

import img6 from './zeb6.jpg'
import img29 from './gif.gif'
import img30 from './r.jpg'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { BiLogoTelegram } from "react-icons/bi";
import { FaHome } from 'react-icons/fa';

const survelliance = () => {
  return (
    <div>

<div id='na'>
{/* <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" /> */}

<div class="wrapper">
  
{/*   <div class="label">Submit your search</div> */}
  <div class="searchBar">
    <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
      <svg style={{width:'24px',height:'24px',color:'white'}} viewBox="0 0 24 24">
        <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    </button>
  </div>
</div>
</div>
{<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Nav.Link href="/Home"><Navbar.Brand href="#home">SURVELLIANCE</Navbar.Brand></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">POE SWITCHES</Nav.Link>
            <NavDropdown title="CAMERA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PTZ Camera</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                IP Camera
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FISH Eye Camera
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HD Camera</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Smart Wifi Camera
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="VIDEO RECORDER" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">XVR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                NVR
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="DOOR PHONE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Video Door Phone</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="ACCESSORIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Power Supply</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cables
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BNC/DC</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="/">UPS</Nav.Link>
           
            <Nav.Link href="/Home">Home <FaHome/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}
    


    
<h1>FEATURED PRODUCTS</h1><br></br><br></br>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-md-3">
    <div class="card">
      <img src={img17} class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/">
        <h5 class="card-title">Speakers</h5></Link>
        <p class="card-text">This is a additional conten content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src={img24} class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/"><h5 class="card-title">Ear pouds</h5></Link>
        <p class="card-text">This is lead-in to additionalent is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src={img30} class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/"><h5 class="card-title">Home Theatre</h5></Link>
        <p class="card-text">This is<br></br> a longer cardditional content.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src={img23} class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/"><h5 class="card-title">LED Tv</h5></Link>
        <p class="card-text">This is a lontent. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
<br></br>
<div id='yellow'>
  
<img src={img2} className='zoom'  alt="" />
<h1></h1>
</div>
<br></br>
<div id='lp'>
<h1>LATEST PRODUCTS</h1>
<br></br>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-md-3">
    <div class="card">
    
      <img src={img3} class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/"><h5 class="card-title">Alarm</h5></Link>
       
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src={img4}  class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/"><h5 class="card-title">Camera</h5></Link>
        
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      {/* <img src={i} class="card-img-top" alt="..."/> */}
      <div class="card-body">
      <Link to="/"><h5 class="card-title">Card title</h5></Link>
       
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img  src={img6}  class="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/"><h5 class="card-title">Projector</h5></Link>
        
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<div id='ye'>
<img src={img29} className='gif' alt="" />
</div>
{/* <div id='yell'>
<div className='cen'>
<h4 ><BiLogoTelegram className='ic' />  NEWSLETTER</h4>
</div>
</div>
 */}



<br></br><br></br><br></br>
<div className='containerrrs'>
<div class="container">
  <div class="row">
  <div class="col order-last">
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
</svg><br></br><br></br>
<Link to="/"><div class='i'><h5>Support</h5>
      <p>Toll Free: 1880058954821
        Email:
        sufiwgfjhocvbu.dbyg@dvgu.com
      </p></div></Link>
    </div>
    <div class="col">
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-life-preserver" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658m-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg><br></br><br></br>
<Link to="/"><div class='i'><h5>Sales Support</h5>
      <p>Access complete product information
        View Here
      </p></div></Link>
    </div>
    <div class="col">
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-globe-asia-australia" viewBox="0 0 16 16">
  <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"/>
</svg><br></br><br></br>
<Link to="/"><div class='i'><h5>Zebeye DDNS</h5>
    <p>Zebeye DDNS controle panel. View Here</p></div></Link>
    </div>
    <div class="col order-first">
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg><br></br><br></br>
<Link to="/"><div class='i'><h5>Become Our Partner</h5>
      
      <p>Join our exclusive
        partner program
        and explore great bussines opportunities. View details
      </p></div></Link>
    </div>
  </div></div>
</div><br></br><br></br>
<div id='bot'>
<div class="container">

  <div class="row" >
   <br></br>
    <div class="col order-last">
      <h5 style={{marginTop:'30px'}}>INFORMATION</h5>
      <div id='lil'>
      <Link to="/" > ABOUT FQEIPFP CCTV </Link>   <br></br>
      <Link to="/" > Sales Support </Link>   <br></br>
      <Link to="/" > Privacy Policy </Link>   <br></br>
      </div>
      </div>
        <br></br>
       <br></br>
       
    <div class="col order-first">
      <h5 style={{marginTop:'30px',}}>ABOUT US</h5>      
      <p style={{marginRight:'50px',color:'white'}}>Zebronics' mission as acompany is to bring safety<br></br>
      and security to each and every household in india <br></br>
      Staying Always Ahead. <h6>Keep an Eye.</h6>
      </p>
      <p style={{marginRight:'50px',color:'white'}}>Toll Free 1264 1451 545</p>
      <Link to="/" style={{color: 'rgb(255, 255, 255)'}} > mail@gmail.com </Link>   <br></br>
  
    </div>
  </div>

  </div>


</div>
<div id='bo'>
  Copyright 2023 - All rights reserved.

</div> 
    </div>
  )
}

export default survelliance
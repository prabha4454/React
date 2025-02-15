import React from 'react'
import './wel.css';
import { Link } from 'react-router-dom';
import img1 from './ht.png'
import img2 from './lappng.png'
import img3 from './pro.png'
import img4 from './earp.webp'
import Footer from './Footer';


const wel = () => {
  /* Demo purposes only */


  return (
    <>


    <div className='hero'>
        <h1 className='text-reveal' style={{width:'100%',height:'50px',backgroundColor:'limgreen'}}>
            <span >WELCOM TO</span>
         
        </h1>
    </div>
   <br></br><br></br><br></br><br></br>
    <h1 class="title-shop">SHOP </h1>
    
  <main class="main bd-grid">
    <article class="card">
      <div class="card__img">
        <img src={img2} style={{height:'150px'}} alt="" />
      </div>
      <div class="card__name">
      <Link to="/About"><p style={{color:'white'}}><h2>BUY NOW</h2></p></Link>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon">
          <ion-icon name="heart-outline"></ion-icon>
        </a>

        <div>
          <span class="card__preci card__preci--before">$990.00</span>
          <span class="card__preci card__preci--now">$749.00</span>
          <p>Laptop</p>
        </div>
        <a href="" class="card__icon">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </div>
      
    </article>

    <article class="card">
      <div class="card__img">
        <img src={img1} style={{width:'170px', height:'150px'}} alt="" />
      </div>
      <div class="card__name">
      <Link to="/About"><p style={{color:'white'}}><h2>BUY NOW</h2></p></Link>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon">
          <ion-icon name="heart-outline"></ion-icon>
        </a>
        <div>
          <span class="card__preci card__preci--before">$990.00</span>
          <span class="card__preci card__preci--now">$749.00</span>
          <p>Sound Bars</p>
        </div>
        <a href="" class="card__icon">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </div>
    </article>

    <article class="card">
      <div class="card__img">
        <img src={img3} style={{height:'150px'}} alt="" />
      </div>
      <div class="card__name">
      <Link to="/About"><p style={{color:'white'}}><h2>BUY NOW</h2></p></Link>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon">
          <ion-icon name="heart-outline"></ion-icon>
        </a>

        <div>
          <span class="card__preci card__preci--before">$990.00</span>
          <span class="card__preci card__preci--now">$749.00</span>
          <p>Projectors</p>
        </div>
        <a href="" class="card__icon">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </div>
    </article>

    <article class="card">
      <div class="card__img">
        <img src={img4} style={{height:'150px'}} alt="" />
      </div>
      <div class="card__name">
      <Link to="/About"><p style={{color:'white'}}><h2>BUY NOW</h2></p></Link>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon">
          <ion-icon name="heart-outline"></ion-icon>
        </a>

        <div>
          <span class="card__preci card__preci--before">$990.00</span>
          <span class="card__preci card__preci--now">$749.00</span>
          <p>Ear Pods</p>
        </div>
        <a href="" class="card__icon">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </div>
    </article>
  </main>
<br></br><br></br>
  <Footer />

   

 
  
  
    </>
  )
}

export default wel
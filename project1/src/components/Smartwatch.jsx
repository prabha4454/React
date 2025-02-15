import React from 'react'
import './Smartwatch.css'
import Footer from './Footer';
import img1 from './Smart-Watch.webp';
import img2 from './p2.webp';
import img3 from './p3.webp';
import img4 from './p1.webp';
import img23 from './Fit.avif'
import img24 from './fit2.avif'
import img25 from './flaunt.avif'
import img26 from './iconic.avif'
import img27 from './Speaker.avif'
import img28 from './Earbuds.avif'
import img29 from './Projector.avif'
import img30 from './Headphone.avif'
import Navebar from './Navebar';
import { Link } from 'react-router-dom';



const Smartwatch = () => {
  return (
    <>
    <Navebar />
      <div id='curs'>
        <img src={img1} alt='/' />
      </div>
      <div class="card-group">
        <br></br>
        <div id='sec'>
          <Link to="/Home" className='for'>Home</Link>
        </div>


        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={img3} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Boat</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                  <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp1500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img2} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Samsung</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp2500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img3} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Apple</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp3000.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img4} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Redmi</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp2700.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={img23} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Blackberry</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp4000.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img24} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Zebronics</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp5400.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img25} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Bugati</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp20000.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={img26} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Zebronics</span>
                  </div>
                  <div class="title-product">
                    <h3>Smart Watch</h3>
                  </div>
                  <div class="description-prod">
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp3000.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div id='rc'>
            <h1>Explore Collection</h1>
            <br></br>
          <div class="container">
            <div class="row row-cols-4">
              <div class="col"><img src={img27} alt='/' className='im' /> <Link to="/Home" className='for'>Speakers</Link></div>
              <div class="col"> <img src={img28} alt='/' className='im' /><Link to="/Home" className='for'>Earbuds</Link></div>
              <div class="col"> <img src={img29} alt='/' className='im' /><Link to="/Home" className='for'>Projector</Link></div>
              <div class="col"> <img src={img30} alt='/' className='im' /><Link to="/Home" className='for'>Headphone</Link></div>
            </div>
          </div></div>

        <br></br>
      {/*   <div className='boo' style={{ textAlign: 'center', width:'100%',height:'30px' }}>
         </div> */}
        <br></br>

        
        <div id='foot'>
        <Footer />
        </div>



      </div>
    </>
  )
}

export default Smartwatch
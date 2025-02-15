import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

import img5 from './lap.jpg';
import img6 from './mix.jpg';
import img7 from './mobile.jpg';
import img8 from './ear.webp';
import img9 from './f.jpg';
import img10 from './g.jpg';
import img11 from './i.jpg';
import img12 from './j.jpg';
import img16 from './k.jpg';
import img17 from './l.jpg';
import img18 from './m.jpg';
import img19 from './n.jpg';
import img21 from './images1.webp';
import img35 from './x.webp'
import img36 from './y.webp'
import img37 from './z.webp'
import img38 from './projector.webp'
import img39 from './tvtv.webp'
import img40 from './6.webp'
import img41 from './7.jpg'
import img42 from './9.jpg'
import img43 from './r2.jpg'
import img44 from './r3.jpg'
import img45 from './r4.webp'
import Edit from './Edit';

import Navebar from './Navebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Home = () => {

  return (
    <div>
      <div id='navebar'>
        <div id='ul' className='marquee'>
          <div id='ull'>
            <ul>
              <li>
                <Link to="/"><b>Watch our new Ad Film ft. Hrithik Roshan </b></Link>
              </li>
              <li>
                <Link to=""><b>*</b></Link>
              </li>
              <li>
                <Link to="/"><b>Pro Series Laptop | Sale is Live </b></Link>
              </li>
              <li>
                <Link to=""><b>*</b></Link>
              </li>
              <li>
                <Link to="/About"><b>NEW: 625W Soundbar with Dual Subwoofer </b></Link>
              </li>
              <li>
                <Link to=""><b>*</b></Link>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <Navebar />

   



   <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img35} alt="img1" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Peripharals for Gaming & Streaming Setup</h2>
              
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img36}  alt="img3" />
            <div class="carousel-caption d-none d-md-block" style={{color:'white'}}>
              <h5>Gaming Headphones Whith Dolby Atmos </h5>
              <h2>Ready To Havoc  </h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img37} alt="img4" />
            <div class="carousel-caption d-none d-md-block" style={{color:'white'}}>
            <h5>Upgrate Your TV Audios</h5> 
              <h2>Soundbars With Dolby Atmos  </h2>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 




      <br></br><br></br>
      <div id='u' className='marquee'>
        <h1>SINCE 1999 | ALWAYS AHEAD</h1>
      </div>

      <br></br><br></br>
      <div id="cards_landscape_wrap-2">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="/Buypage">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={img9} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>BUY NOW</h6>
                      <p> Blooduth Speakers <br></br>$ 1500 </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="/Bpb">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={img10} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>BUY NOW</h6>
                      <p>Blooduth Speakers<br></br>$ 2000</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="/Bpc">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={img11} alt="" />
                    </div>

                    <div class="text-container">
                      <h6>BUY NOW</h6>
                      <p>Blooduth Speakers<br></br>$ 1800</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="/Bpd">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={img12} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>BUY NOW</h6>
                      <p>Mouse <br></br>$ 800</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
   <Edit /> 
      <div class="embed-responsive embed-responsive-16by9" style={{ height: '500px'}}>
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ql6mhhHCldY?rel=0" allowfullscreen></iframe>
      </div>






      {/* hover cards */}
    


      <div id='rc'>
        <br></br>
        <div class="container">
          <div class="row row-cols-4">
            <div class="col"><img src={img8} alt='/' className='im' /> <Link to="/Home" className='for'>Earbuds</Link></div>
            <div class="col"> <img src={img5} alt='/' className='im' /><br></br><Link to="/Home" className='for'>Laptop</Link></div>
            <div class="col"> <img src={img6} alt='/' className='im' /><br></br><Link to="/Home" className='for'>Home Applience</Link></div>
            <div class="col"> <img src={img7} alt='/' className='im' /><Link to="/Home" className='for'>Mobiles</Link></div>
          </div>
        </div></div>

      {/* cards */}
      <div class="container text-center">
        <h1>Products</h1>
        <span><i><a href="http://blog.wingerdstok.com" class="wsk-btn">NEW Arraivals</a></i></span>
      </div>


      <div class="shell">
        <div class="container">
          <div class="row">
            <div class="col-md-3 ">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={img38} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Projector</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp1400.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img45} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Sound Bar</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp4500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img40} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>UPS</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp2370.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img41} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Systems</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart cvf ggf gfg g</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp1850.000</span></div>
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
                  <img src={img42} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Computers</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp7500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={img43} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Sound Bar</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp5500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={img44} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Camera</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp15500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img"><img src={img39} alt="Product" class="img-responsive" /></div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>LED TV</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart </h3>
                  </div>
                  <div class="description-prod">
                    <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. </p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp20500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id='font'>
        <h1 className='fo'>HOME<br></br>THEATER
        </h1>
        <p className='fonts' style={{fontSize:'23px',color:'black'}}><b>Here's how you can setup a stunning Visual & Sound experience<br></br> right from the comfort of your home</b></p>
      </div><br></br><br></br><br></br><br></br><br></br><br></br>
      <div id='img'>
        <img src={img21} className='image' alt="" />
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br>

      {/* hover images */}
      <header class="text-center">
        <h1 class="display-4 font-weight-bold"> Buy More Happy More </h1>
        <p class="font-italic text-muted mb-0">Best collection of Products</p>
      
      </header>



      <div class="py-5">
        <h3 class="font-weight-bold mb-0"></h3>
        <p class="font-italic text-muted mb-4"></p>
        <div class="row">

          <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="hover hover-1 text-white rounded"><img src={img16} alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-1-content px-5 py-4">
                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">ear </span>pods</h3>
                <p class="hover-1-description font-weight-light mb-0">The href attribute requires a valid value to be accessible.</p>
              </div>
            </div>
          </div>


          <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="hover hover-1 text-white rounded"><img src={img17} alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-1-content px-5 py-4">
                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Blooduth </span>Speakers</h3>
                <p class="hover-1-description font-weight-light mb-0">The href attribute requires a valid value to be accessible.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="hover hover-1 text-white rounded"><img src={img18} alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-1-content px-5 py-4">
                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">MO </span>USE</h3>
                <p class="hover-1-description font-weight-light mb-0">The href attribute requires a valid value to be accessible.</p>
              </div>
            </div>
          </div>


          <div class="col-lg-3">
            <div class="hover hover-1 text-white rounded"><img src={img19} alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-1-content px-5 py-4">
                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Ear</span>Phones</h3>
                <p class="hover-1-description font-weight-light mb-0">The href attribute requires a valid value to be accessible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


     
      <br></br><br></br><br></br>
      <Footer />

<br></br><br></br><br></br>

    </div>
  );
};

export default Home;

import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "./contact.css"

export const Contact = () => {
  return (
    <>
      <div  
 className="contact  text-center  py-5">
  
        <h1 className="h1" >CONTACT</h1>
        <p className="text-secondary py-2">For any queries or specific requirements contact us.</p>

        <div className="contact-details " data-mdb-animation="slide-in-left"   >
          <div className="row gap-5 justify-content-between ">
            <div className="contact-address col-md-5 items bg-white align-middle ">
           <p className="text-danger fs-1 mt-3"> <i className="bi bi-geo-alt-fill  "></i></p>

              <h2 className="text-center h2 my-2">Our Address</h2>

              <div className="div text-center py-2 text-secondary  ">
                <ul>
                  <li>#7 Big Kannara Street,Mayiladuthurai.</li>
                  <li>
                    #8 1st Floor,Presidency Alfa Apartments,Rangarajapuram Main
                    Road,Kodambakkam,Chennai-600024.
                  </li>
                </ul>
              </div>
            </div>

            {/* contact Email */}

            <div className="contact-email   col-md-6 items col-lg-3  bg-white">
              <p className="text-danger fs-1 mt-3"><i class="bi bi-envelope-at-fill"></i></p>
              <h2 className="text-center h2 my-2">Email Us</h2>
              <p className="text-center py-2 text-secondary">help@a1ideaz.com</p>
            </div>

            {/* mobile number */}

            <div className="phone col-md-6 col-lg-3 items bg-white">
              <p className="text-danger fs-1 mt-3"><i class="bi bi-telephone-fill"></i></p>
              <h2 className="text-center h2 my-2">Call Us</h2>
              <p className="text-center py-2 text-secondary">+91 9751811665</p>
            </div>
          </div>
          
          {/* contact section for map and form */}

          <div className="div gap-5 row mt-5 justify-content-between">

            <div className="location items col-md-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.166865311162!2d79.65115887489745!3d11.100938553124442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5521e82de627f3%3A0x6f718a54aa2be336!2sLivewire!5e0!3m2!1sen!2sin!4v1736751613182!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0" }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-form items col-md-5 p-5 bg-white">
                <form action="">
                <input type="text"  className="form-control mb-3 p-3" placeholder="Your Name" />
<input type="email" name="" id="" className="form-control  mb-3 p-3"  placeholder="Your Email"/>
<input type="text" className="form-control  mb-3 p-3" placeholder="Subject" />
<textarea name="" className="form-control  mb-3 p-3 " rows="5" placeholder="Message" id=""></textarea>

<button className="btn btn-danger mb-0  " type="submit">Send Message</button>
                </form>

            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

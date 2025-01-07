




import React from 'react'
import "./footer.css"
export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-light">
                <div className="container  footer-top">
                    <div className=' footer-t-left'>
                        <div className="d-flex gap-1 footer-menu ">
                            <div className="item1 p-2 col-md-6 col-lg-3">
                                <h2 className="text-white ">A1IDEAZ</h2>
                                <address className="mb-3" >
                                    <p>#7 Big Kannara Street</p>
                                    <p>Mayiladuthurai</p>
                                    <p>Tamil Nadu</p>
                                </address>
                                <div>
                                    <p><span className="bold">Phone:</span>+91 9751811665</p>
                                    <p><span className="bold">Email:</span>help@alideaz.com</p>
                                </div>

                            </div>
                            <div className="item2 items  col-lg-3 col-md-6">

                                <h5>Useful Links</h5>
                                <ul>
                                    <li><a href=''><i class="bi bi-caret-right-fill mr-1"></i>Home</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>About Us</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Services</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Terms of service</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="item3 items col-md-6 col-lg-3">
                                <h5 >Our Services</h5>

                                <ul>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Web Design</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Web Development</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Digital Marketing</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Mobile Applications</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Desktop Applications</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>Cloud Services</a></li>
                                    <li><a href=""><i class="bi bi-caret-right-fill mr-1"></i>It Infra</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" footer-t-right ">
                        <img src="https://a1ideaz.com/assets/img/logo-white.png" className='img-fluid' alt="" />

                    </div>



                </div>
                <hr className='text-danger container' />
                <div className="container footer-end   ">
                    <div className="copy-rights mx-auto ">
                        <p>Copyright A1ideaz. All Rights Reserved</p>
                    </div>
                    <div className="social mx-auto  d-flex gap-2 ">
                        <div>
                            <a href=""><i class="bi bi-twitter "></i>
                            </a>
                        </div>
                        <div> <a href=""> <i class="bi bi-facebook"></i>
                        </a>
                        </div>
                        <div> <a href=""> <i class="bi bi-instagram"></i>
                        </a>
                        </div>

                        <div>  <a href=""> <i class="bi bi-linkedin"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


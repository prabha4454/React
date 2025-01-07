/* import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"; */
import "./style/about.css";

export const About = () => {
    return (
        <>
            <div className="container-fluid about-section ">
                <div className="container ">
                    <div className="about ">
                        <div className="about-left">
                            <h1>

                                Who We Are?
                            </h1>
                            <p >

                                At A1ideaz, we specialize in IT Development Services, utilizing cutting-edge technologies such as PHP, React, React Native, and more. Our dynamic team is dedicated to crafting bespoke solutions that align with your vision and business objectives. Whether it's mobile, web, or desktop applications, we thrive on turning your ideas into powerful and intuitive software with 6 years of experience.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i>Tailored Solutions for Every Business</li>
                                <li><i className="bi bi-check-circle"></i>Point of Sale (POS) Excellence</li>
                                <li><i className="bi bi-check-circle"></i>Open-Source Customizations</li>
                                <li><i className="bi bi-check-circle"></i>End-to-End IT Infrastructure Services</li>

                            </ul>

                        </div>

                        <div className="about-right">
                            <img src="/images/about.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

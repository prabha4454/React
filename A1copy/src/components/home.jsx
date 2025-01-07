/* import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"; */
import "./style/home.css";

export const Home = () => {
  return (
    <>
      <div className="container-fluid home-section ">
        <div className="container ">
          <div className="home ">
            <div className="home-left">
              <h1 className="h1 text-white ">
              
                Your End-to-End IT Solutions Partner
              </h1>
              <p className="p  ">
       
                Welcome to A1ideaz, Where innovation meets excellence in it
                solutions.As a leading provider of comprehensive IT services, We
                pride ourselves on offering a diverse range of expertise to meet
                the evolving needs of businesses across industries.
              </p>

              <button className="btn btn-outline-light text-secondary ">Get Starded</button>
            </div>
            <div className="home-right">
              <img src="/images/home.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

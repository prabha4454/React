/* import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"; */
import "./style/whyus.css";

export const Whyus = () => {
  return (
    <>
      <div className="container-fluid whyus-section ">
        <div className="container ">
          <h1>Why us ?</h1>
          <p>Partner with A1ideaz to embark on a transformative journey where technology meets business goals.</p>
          <div className="whyus w-100">
            <div className="why-left">
              <ul>
                <li >
               
                    <h2>Versatility</h2>
                    <p>
                      From development services to infrastructure solutions, we
                      offer a comprehensive suite of IT services under one roof.
                    </p>
                 
                </li>
                <li>
                  
                    <h2>Innovation</h2>
                    <p>
                      Our commitment to staying at the forefront of
                      technological advancements ensures that your projects
                      benefit from the latest and most effective tools in the
                      industry.
                    </p>
                 
                </li>
                <li>
                 
                    <h2>Client-Centric Approach</h2>
                    <p>
                      Your success is our success. We prioritize your needs,
                      maintaining open communication and collaboration
                      throughout the project lifecycle.
                    </p>
                  
                </li>
                <li>

                    <h2>Quality Assurance</h2>
                    <p>
                      Rigorous testing processes and a commitment to excellence
                      ensure the delivery of reliable and flawless solutions.
                    </p>
                
                </li>
                <li>
                  
                    <h2>Security and Reliability</h2>
                    <p>Whether it's securing your infrastructure or safeguarding your data, we prioritize the security and reliability of our solutions.</p>
                  
                </li>
              </ul>
            </div>
            <div className="home-right">
              <img src="/images/why-us.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

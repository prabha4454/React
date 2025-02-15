import React from 'react';
import './About.css';

const About = () => {
  function showLoading(button) {
    button.innerHTML = "Processing Payment...";
    setTimeout(function() {
      button.innerHTML = "Payment completed.";
    }, 3000); // Change to the desired duration in milliseconds
  }

  return (
    <div>
      
      <div className="credit-card-form">
        <h2>PAYMENT PORTAL</h2>
        <img
          className="Image1"
          src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
          alt="6375aad33dbabc9c424b5713-card-mockup-01"
          border="0"
        />
        <form>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card number" required />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder">Card Holder</label>
            <input
              type="text"
              id="card-holder"
              placeholder="Card holder's name" required
            />
          </div>
          <div className="form-row">
            <div className="form-group form-column">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" required/>
            </div>
            <div className="form-group form-column">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="CVV" required />
            </div>
          </div>
          <button
            type="button"
            className="button"
            onClick={(event) => showLoading(event.target)}
          >
            PAY NOW - $(TOTAL)
          </button>
        </form>
      </div>
 
    </div>
  );
};

export default About;
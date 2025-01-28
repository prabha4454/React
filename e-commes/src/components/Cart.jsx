import React from "react";

export const Cart = (props) => {
  const { cart , } = props;

  return (
    <>
    

      <div className="cart-list col-md-5 col-lg-4">
        {cart.map((item,index) => (
          <div key={index} >
            <div className="cart-item d-flex">
              <img src={item.pimg} alt={item.name} className="img-fluid"/>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">{item.price}</div>
              <div className="cart-item-action">
                <button
                  className="cart-item-remove"
                  /* onClick={() => handleRemoveFromCart (item._id)} */
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

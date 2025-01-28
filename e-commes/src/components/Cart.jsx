import React from "react";

export const Cart = (props) => {
  const { cart } = props;

  return (
    <>
      <h1> cart items</h1>

      <div className="cart-list">
        {cart.map((item,index) => (
          <div key={index}>
            <div className="cart-item">
              <img src={item.pimg} alt={item.name} />
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">{item.price}</div>
              <div className="cart-item-action">
                <button
                  className="cart-item-remove"
                  onClick={() => cartItemRemove(item._id)}
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

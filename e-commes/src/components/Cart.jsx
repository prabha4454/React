import React from "react";

export const Cart = (props) => {
  const { cartItems , handleDelete} = props;

  return (
    <>
    

        {cartItems.map((item,index) => (
          
      <div className="cart-list  ">
          <div key={index} >

            <div className="cart-item max-w-lg d-flex items-center gap-x-2 mx-auto p-3 outline-black/5 shadow-lg rounded-lg mb-3 bg-white outline ">
              <img 
              src= {`http://localhost:5000${item.pimg}`}
              alt={item.name} 
              
              className="size-20 lg:size-30 md:size-25 sm:size-22 rounded-sm"/>
              <div 
              className="cart-item-name "
            >
                <strong>
                  Product Name:
                </strong>
                <br></br>
                {item.name}
               </div>
              <div 
              className="cart-item-price" 
              style={{width:"6rem"}}>
                <strong>
                  Price:
                  </strong><br />
                  {item.price}</div>
              <div 
              className="cart-item-action"
               style={{width:"6rem"}}>
                <button
                  className="cart-item-remove btn btn-danger"
                  onClick={() => handleDelete(item._id)} 
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          </div>
        ))}
     
    </>
  );
};

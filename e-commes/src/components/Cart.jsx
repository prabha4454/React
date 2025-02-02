import React from "react";

export const Cart = (props) => {
  const { cartItems , handleDelete} = props;

  return (
    <>
    

        {cartItems.map((item,index) => (
          
      <div className="cart-list col-md-12 p-3 border mb-2 ">
          <div key={index} >

            <div className="cart-item d-flex gap-3 p-1 align-items-center  ">
              <img 
              src= {`http://localhost:5000${item.pimg}`}
              alt={item.name} 
              style={{width:"6rem",height:"7rem"}} 
              className="img-fluid border"/>
              <div 
              className="cart-item-name"
               style={{width:"8rem"}}>
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

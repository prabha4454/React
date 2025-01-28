import React from 'react'

export const Product = (props) => {
    const {products ,handleAddToCart} = props;
  return (
    <>
    
    <div className="products">
        <div className="row">
            {products.map((product , index)=>(

                <div className="col-md-4">
                    <div className="card">
                        <img src={product.pimg} alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Price: {product.price}</p>
                            <button className="btn 
                            btn-primary"
                            onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                            </div>
                    </div>
                </div>
            )
               
            )}
        </div>
    </div>
    </>
  )
}

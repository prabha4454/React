import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';

export const Product = (props) => {
    const { products, handleAddToCart } = props;
    return (
        <>
            <div className="products">
                <Link to = '/cart' className='btn btn-primary'>Cart</Link>
                <div className="row p-4">
                    {products.map((product, index) => (
                        <div className="col-md-3 col-sm-4 col-5 col-lg-2 py-2 mx-auto" key={index}>
                            <div className="card">
                                <div className="product-img ">
                                {product.pimg && (
                                    <img
                                        src={`http://localhost:5000${product.pimg}`}
                                        alt={product.name}
                                     
                                        className='d-block mx-auto  img-fluid w-75 p-2'
                                        /* onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/fallback/image.png'; }} */
                                    />
                                )}
                                </div>
                                
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text fs-6 ">{product.description}</p>
                                    <p className="card-text "><strong>Price:</strong> {product.price}</p>
                                    <button className="btn btn-primary btn-sm " onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

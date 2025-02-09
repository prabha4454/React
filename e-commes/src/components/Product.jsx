import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from 'axios';

export const Product = (props) => {
    
    const { products, handleAddToCart } = props;

    const { data, error, isLoading } = useQuery('products', async () => {
        const response = await axios.get('http://localhost:5000/products');
        return response.data; // Correctly return the data from the response
    });


    return (
        <>
            {isLoading ? <div>Loading...</div> : null}
            {error ? <div>Error: {error.message}</div> : null}
            {!error && !isLoading ? (
                <div className="products-section">
                    <h1 className='text-center h1 text-danger bg-dark'> PRODUCTS</h1>
                    <div className="products">
                        <Link to='/cart' className='btn btn-primary'>Cart</Link>
                        <Link to='/add-products' className='btn btn-primary'>Add Proudct</Link>
                        <div className="row p-4">
                            {data.map((product, index) => (
                                <div className="col-md-3 col-sm-4 col-5 col-lg-2 py-2 mx-auto" key={index}>
                                    <div className="card">
                                        <div className="product-img">
                                            {product.pimg && (
                                                <img
                                                    src={`http://localhost:5000${product.pimg}`}
                                                    alt={product.name}
                                                    className='d-block mx-auto img-fluid w-75 p-2'
                                                />
                                            )}
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text fs-6">{product.description}</p>
                                            <p className="card-text"><strong>Price:</strong> {product.price}</p>
                                            <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

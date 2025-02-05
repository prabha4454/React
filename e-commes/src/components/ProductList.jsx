import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from 'axios';



export const ProductList = (props) => {

  

  
    const { data, error, isLoading } = useQuery('products', async () => {
        const response = await axios.get('http://localhost:5000/products');
        return response.data; // Correctly return the data from the response
    });
    const deleteProduct = async(id) => {
            try {
      const response= await  fetch(`http://localhost:5000/product/${id}`,{
                method:"DELETE"
              }) 
              const result = await response.json();
              console.log(result);
              useQuery()
            } catch (error) {
              console.log(error)
            }
          }
    return (
        <>

{isLoading? <p>Loading...</p> : null}
{error ? <p>error</p> : null}
{!isLoading && !error ? (

<div className="table-responsive mt-5 w-100 mb-5">
      <Link to='/add-products' className='btn btn-primary'>Add Products</Link>
<table className="table table-striped table-sm w-75 mx-auto">
                   <thead className='table-dark'>
                    <tr className='text-center allign-middle'>
                        <th className='text-danger'>S/NO</th>
                        <th>PRODUCT NAME</th>

                        <th>PRICE</th>
                        <th>ACTION</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((product, index) => (
                        <tr key={product._id} className='text-center align-middle'>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>

                            <td>{product.price}</td>
                            
                            <td className='d-flex gap-2'>
                                <button className='btn btn-primary' onClick={() => updateProduct(product)}>edit</button>
                                <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>


                </table>
            </div>
            ) : null}
        </>
    )
}

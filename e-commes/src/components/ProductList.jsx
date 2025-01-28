import React from 'react'
import { useState } from 'react'


export const ProductList = (props) => {

    const {products, updateProduct ,deleteProduct} = props;
  

    return (
        <>

<div className="table-responsive mt-5 w-100 mb-5">
<table className="table table-striped table-sm w-75 mx-auto">
                   <thead className='table-dark'>
                    <tr className='text-center allign-middle'>
                        <th className='text-danger'>S/NO</th>
                        <th>PRODUCT NAME</th>

                        <th>PRICE</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id} className='text-center align-middle'>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>

                            <td>{product.price}</td>
                            
                            <td className='d-flex gap-2'>
                                <button className='btn btn-primary' onClick={() => updateUser(product)}>edit</button>
                                <button className="btn btn-danger" onClick={() => deleteuser(product._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>


                </table>
            </div>
        </>
    )
}

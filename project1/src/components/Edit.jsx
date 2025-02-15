
import React, { useState, useEffect } from 'react';

const Edit = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    // Fetch products data from the API
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = async (productId) => {
    try {
      await fetch(`http://localhost:5000/api/product/${productId}`, {
        method: 'DELETE'
      });
      alert("successfully deleted!!!!!!!!!!")
      // Filter out the deleted product from the products array
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
     
      <div className='row'>
        {products.map(product => ( 
          
         
        
        <div class="col-md-3 mb-3 d-flex justify-content-center align-items-center">
            <div class="card">
                <img src={product.picture} class="card-img-top" style={{width:'200px',height:'200px'}} alt={product.name} />
                <div class="card-body text-center">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <p class="card-text"><strong>Price: {product.price}</strong></p>
                    
                   {/*  <button class="btn btn-danger delete-button"onClick={() => handleDelete(product._id)}>Delete</button>
               */}
                </div>
            </div>
        </div>))}
        </div>
    </div>
  );
};

export default Edit;

import React from 'react'
import { useState } from 'react';

export const Upload = (props) => {
  
    const [productData , setProductData] = useState(
        { 
          name :'',
           price : '',
          description : '',
          pimg : null,
         
    
        }
      );

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({...productData , [name]: value});
        console.log(productData);
        };


        const handleFileChange = (e) => {

            setProductData({...productData , pimg : e.target.files[0]});
            };

    const handleProductUpload = async (e) => {
        e.preventDefault();
    
        let formDataToSend = new FormData();
        formDataToSend.append("name", productData.name);
        formDataToSend.append("price", productData.price);
        formDataToSend.append("description", productData.description);
        formDataToSend.append("pimg", productData.pimg);
     
    
        
        try {
            const response = await fetch("http://localhost:5000/upload", {
              method: "POST",
              
              body:formDataToSend
            });
    
          const result = response.json();
    
          setProductData({
            name :'',
          pimg : null ,
          price : '',
          description : ''
          });
          
        
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      };
    
  return (
    <>
    <div className="product-form col-md-8 d-block mx-auto col-sm-8  m-3">    
        <form  onSubmit={handleProductUpload} className='form w-100 p-4'>
<p>
    <label for="pname">Product Name:</label>
    <input 
    type="text" 
    name="name" 
    placeholder="Enter product name" 
    className='form-control'
    value={productData.name}
    onChange={handleInputChange}
    required/>

</p>

{/* for product description */}

<p>
    <label htmlFor="pdescription">Description:</label>
    <textarea
    name="description"
    placeholder="Enter product description"
    className='form-control'
    value={productData.description}
    onChange={handleInputChange}
    required/>
    
</p>

{/* for product price */}
<p>
    <label htmlFor="pprice">Product Price:</label>
    <input
    type="text"
    name="price"
    placeholder="Enter product price"
    className='form-control'
    value={productData.price}
    onChange={handleInputChange}
    required/>

</p>

{/* for product image */}

<p>
    <label for="pimage">Product Image:</label>
    <input 
    type="file" 
    name="pimg" 
    className='form-control' 
  
    onChange={handleFileChange }
    required/>

</p>

 <button type='submit ' className='btn btn-secondary '>Upload </button>
        </form>
    </div>
    </>
  )
};

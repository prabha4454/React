import React from 'react'

export const Upload = (props) => {
    const {productData ,upload , handleFileChange , handleInputChange} = props;
  return (
    <>
    <div className="product-form col-md-4 col-lg-4">
        <form  onSubmit={upload} className='form'>
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
  
    onChange={handleFileChange}
    required/>

</p>

<button type='submit ' className='btn btn-secondary '>Upload</button>
        </form>
    </div>
    </>
  )
};

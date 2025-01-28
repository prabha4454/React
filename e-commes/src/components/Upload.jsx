import React from 'react'

export const Upload = () => {
  return (
    <>
    <div className="product-form">
        <form method=' post' onSubmit={handdleProductUpload} className='form'>
<p>
    <label for="pname">Product Name:</label>
    <input 
    type="text" 
    name="name" 
    placeholder="Enter product name" 
    className='form-control'
    value={productData.name}
    required/>

</p>

{/* for product description */}

<p>
    <label htmlFor="pdescription"></label>
    <textarea
    name="description"
    placeholder="Enter product description"
    className='form-control'
    value={productData.description}
    required/>
    
</p>

{/* for product price */}
<p>
    <label for="pprice">Product Price:</label>
    <input
    type="number"
    name="price"
    placeholder="Enter product price"
    className='form-control'
    value={productData.price}
    required/>

</p>

{/* for product image */}

<p>
    <label for="pimage">Product Image:</label>
    <input 
    type="file" 
    name="image" 
    className='form-control' 
    required/>

</p>

<button type='submit ' className='btn btn-secondary '>Upload</button>
        </form>
    </div>
    </>
  )
}

import React, { useState } from 'react'
import './Admedit.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Admedit = () => {
  const [name,setname ] =useState('');
  const [ description, setdescription ] = useState('');
  const [ price, setprice ] = useState('');
  const [ picture, setpicture ] =useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch ('http://localhost:5000/api/product',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify({name, description, price, picture }),
      });
      if (response.ok) {
        console.log('User created successfully');
        alert('User created successfully');
        setname('');
        setdescription('');
        setprice('');
        setpicture('');
      }
      else{ console.error('Failed to create usr');
    alert('Failed to create user');
  }
    }catch (error) {
      console.error('Error',error);
      alert('Error occured');
    }
  };
  return (
    <>
   <body style={{  /*  fontfamily: "Roboto", Arial, sans-serif; */ /* Formal font */
    margin: '0',
    padding: '0',
    backgroundcolor: '#f5f5f5', /* Light gray background color */
    display: 'flex',
    justifycontent: 'center ',/* Center align horizontally */
    alignitems: 'center', /* Center align vertically */
    minheight: '100vh',}}>
    <div class="containers">
        
        <form method="post"  onSubmit={handleSubmit} >
            <label for="name">Name</label><br></br>
            <input type="text" id="name" value={name} onChange={(e) =>setname(e.target.value)} name="name" requiredB /><br></br>

            <label for="description">Description</label><br></br>
            <input type="text" id="description" value={description} onChange={(e) =>setdescription(e.target.value)} name="description" required /><br></br>

            <label for="price">Price</label><br></br>
            <input type="number" id="price" value={price} onChange={(e) =>setprice(e.target.value)}  name="price" required /><br></br>

           {/*  <label for="category_id">Category</label><br></br>
            <select id="categorySelect">
                <option value="">Select Category</option>
            </select> */}<br></br>
        
            <label for="picture">Image Url</label><br></br>
            <input type="text" id="picture" value={picture} onChange={(e) =>setpicture(e.target.value)} name="picture" required /><br></br>

            <input type="submit" className='btnn'  value="Add Product" /><br></br><br></br>
            <Link to="/Home"> <Button variant="outline-warning" className='bt'>Home</Button>{' '}</Link>
        </form>
    </div>
    </body>

   
  </>
  )
}
export default Admedit
import React from 'react'
import { useState } from 'react'

export const Form1 = () => {
    const [formData , formDataSet] = useState({
        fname:'',
        lname:'',

    })
  return (
<>
 
 <div className="survay-form">
    <form action="">

{/* ----------For first name ---------- */}
    <p>
        <label htmlFor="fname">FirstName:</label>
        <input 
        type="text" 
        id='fname'
        name='fname'
        value={formData.fname}
        placeholder='Enter Your FirstName' 
        required />
        </p>  

        {/* ------ For Last Name ----------*/}  

        <p>
            <label htmlFor="lname">LastName:</label>
            <input 
            type="text"
            id='lname'
            name='lname'
            value={formData.lname}
            placeholder='Enter Your LastName'
            required />
        </p>

        {/* ----- Email ------- */}

        <p>
            <label htmlFor="email">Email:</label>
            <input
             type="email" 
             name="email" 
             id="email"
             value={formData.email}
             className='form-control'
             placeholder='Enter Your Email'
             required />
        </p>

        {/* ------for phone Number ------ */}

        <p>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" 
            name="phone" 
            id="phone"
            value={formData.phone} 
            placeholder='+91'
            className='form-control'
            />
        </p>
    </form>
 </div>

</>
  )
}

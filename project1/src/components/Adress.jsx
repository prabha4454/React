import React from 'react'
import './Adress.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
//import emailjs from '@emailjs/browser';

const Adress = () => {
 
   

    const [name, setname ] = useState('');
    const [email, setemail ] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [street, setstreet ] = useState('');
    const [city, setcity ] = useState('');
    const [pincode, setpincode ] = useState('');
    const [altphn, setaltphn ] = useState('');

   /* const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_npogoj2';
        const templateId = 'template_vw6jrfe';
        const publicKey = 'zRFWk96yJ5OUQttZV';
   

    const templateParams ={
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
       // message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfuly', response);
        setname('');
        setemail('');
        setphone('');
        setaddress('');
        setstreet('');
        setcity('');
        setpincode('');
        setaltphn('');
    })
    .catch((error) => {
        console.log('Error sending email:', error);
    });
} */




/* 
  const [name,setname ] =useState('');
 
 
  const [ phone, setphone ] = useState('');
  const [ address, setaddress ] =useState('');
  const [ street, setstreet ] = useState('');
  const [ city, setcity ] = useState('');
  const [ dno, setdno ] = useState('');
  const [ pincode, setpincode ] = useState('');
  const [ altphn, setaltphn ] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch ('http://localhost:5000/api/cusdetails',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify({name, phone, address, street, city, dno, pincode, altphn }),
      });
      if (response.ok) {
        console.log('User created successfully');
        alert('User created successfully');
        setname('');
        setphone('');
        setaddress('');
        setstreet('');
        setcity('');
        setdno('');
        setpincode('');
        setaltphn('');
      }
      else{ console.error('Failed to create usr');
    alert('Failed to create user');
  }
    }catch (error) {
      console.error('Error',error);
      alert('Error occured');
    }
  };
 */
 /*  Email Js */
      /*   const serviceId = 'service_npogoj2';
        const templateId = 'template_vw6jrfe';
        const publicKey = 'zRFWk96yJ5OUQttZV';
   

    const templateParams ={
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfuly', response);
        setname('');
        setphone('');
        setaddress('');
        setstreet('');
        setcity('');
        setpincode('');
        setaltphn('');
    })
    .catch((error) => {
        console.log('Error sending email:', error);
    });/*  */
 

 /*  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setemail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // /^\d{10}$/
    // Check if the email matches the regular expression
    setIsValidEmail(emailRegex.test(newEmail));
  }; 
 */

  return (
    <>
      {/* <div id='ord'>
    
          <form onSubmit={handleSubmit}>
            <br></br>
            <input type="text" className="form-control" style={{ width: '500px',marginLeft:'80px' }} value={name} onChange={(e) =>setname(e.target.value)} placeholder="Name" required />
           <input type="text" className="form-control" style={{ width: '500px',marginLeft:'80px' }} value={email} onChange={handleEmailChange} placeholder="Email" required /> 
           <input type='email' placeholder='Your Email'  style={{width:'100%',}} value={email} onChange={(e) => setemail(e.target.value)} /><br></br>

            <br></br>
            <input type="text" className="form-control" style={{ width: '500px',marginLeft:'80px' }} value={phone} onChange={(e) =>setphone(e.target.value)} id='phone' placeholder="phone" required /><br></br>
            <div class="row">
              <div class="col"><input type="text" className="form-control" id='address' placeholder="Address" value={address} onChange={(e) =>setaddress(e.target.value)} required /><br></br>
                <input type="text" className="form-control" id='street' placeholder="street" value={street} onChange={(e) =>setstreet(e.target.value)} required /></div>
              <div class="col"><input type="text" className="form-control" id='city' placeholder="City" value={city} onChange={(e) =>setcity(e.target.value)} required /><br></br>
                <input type="text" className="form-control" placeholder="D,No" id='dno' required /><br></br></div>
              <div class="col"><input type="text" className="form-control" id='pincode' placeholder="pincode" value={pincode} 
              onChange={(e) =>setpincode(e.target.value)} required /><br></br></div>
              <div class="col"><input type="text" className="form-control" id='altphn' value={altphn} onChange={(e) =>setaltphn(e.target.value)} placeholder="Alt P No " required /><br></br>  <button className="btn" style={{backgroundColor:'skyblue'}}>Submit</button></div>
             <Link to="/Home"> <button type='submit' className="btn" style={{backgroundColor:'orange'}}>Home</button></Link>
            </div>
          

         
          
          </form>
          
      </div>
 */}



    </>
  )
}

export default Adress
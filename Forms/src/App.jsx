import 'bootstrap/dist/css/bootstrap.min.css';
import { Form1 } from './Form1';
import { useState } from "react";
import { useEffect } from 'react'
import { UserList } from './userList';

 const App = () => {

  const [formData, formDataSet] = useState({
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    formDataSet({ ...formData, [name]: value });
    console.log(formData);
  };

  /* handle submit function */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* let formDataToSend = new FormData();
    formDataToSend.append("fname", formData.fname);
    formDataToSend.append("lname", formData.lname);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
 */
    
    try {
        const response = await fetch("http://localhost:5000/submit", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

      const result = response.json();

      formDataSet({
        fname:'',
        lname:'',
        dob:'',
        gender:'',
        email:'',
        phone:'',
        
      })
      userList();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };


  const [users, setUsers] = useState([]);


  const userList = async () => {

      try {
          const userDetails = await fetch('http://localhost:5000/user')
          const data = await userDetails.json();
          setUsers(data);
          console.log(data)

          console.log("user details fecthed successfully")
      } catch (error) {
          console.log('error fetching users list', error);


      }

  }
  useEffect(() => {
      userList();
  }, []);

  const deleteuser = async (id) => {
      try {
          const response = await fetch(`http://localhost:5000/user/${id}`, {
              method: 'DELETE',

          })
          const data = await response.json();
      
          userList()
          console.log("user deleted successfully");
      }
      catch (error) {
          console.log('error deleting user', error);
      };
  }




  return (
<>


<Form1 submit={handleSubmit} input={handleInputChange} formData={formData} />

<UserList users={users} deleteuser={deleteuser} />



</>
  )
}

export default App ;
import React from "react";
import { useState } from "react";
import "./css/survayForm.css";

export const Form1 = () => {
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
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="survay-form  d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form onSubmit={handleSubmit} className="form">
          {/* ----------For first name ---------- */}
          <p>
            <label htmlFor="fname">FirstName:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your FirstName"
              required
            />
          </p>

          {/* ------ For Last Name ----------*/}

          <p>
            <label htmlFor="lname">LastName:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your LastName"
              required
            />
          </p>

          {/* ---- Age ----- */}

          <p>
            <div className="row">
              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  name="gender"
                  id="gender"
                  onChange={handleInputChange}
                  className="form-control "
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </p>

          {/* ----- Email ------- */}

          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </p>

          {/* ------for phone Number ------ */}

          <p>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91"
              className="form-control"
            />
          </p>

          <input
            type="submit"
            className="btn btn-secondary d-block mx-auto"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

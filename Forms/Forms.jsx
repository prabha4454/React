import React, { useState } from "react";

const Forms = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    userImage: null,
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files)
    setFormData({ ...formData, userImage: e.target.files[0] });
  };

/*  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("userImage", formData.userImage);
  
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };  */

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Display the uploaded file
    if (formData.userImage) {
      console.log("Uploaded Image:", formData.userImage.name);
    }
  };
  

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age Field */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* User Image Upload */}
        <div>
          <label>User Image:</label>
          <input
            type="file"
            name="userImage"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;

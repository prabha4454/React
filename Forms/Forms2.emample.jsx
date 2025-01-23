import React, { useEffect, useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    userImage: null,
  });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null); // ID of the user being edited

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, userImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    if (formData.userImage) {
      formDataToSend.append("userImage", formData.userImage);
    }

    try {
      const response = await fetch(
        editId ? `http://localhost:5000/users/${editId}` : "http://localhost:5000/submit",
        {
          method: editId ? "PUT" : "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      console.log("Server Response:", result);

      // Reset form and fetch updated user list
      setFormData({ name: "", age: "", phoneNumber: "", userImage: null });
      setEditId(null);
      fetchUsers();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      age: user.age,
      phoneNumber: user.phoneNumber,
      userImage: null, // Reset file input
    });
    setEditId(user._id);
  };

  const handleDelete = async (id) => {
    let con=confirm("Delete the that item?")
    if(con)
    {
    try {
      await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error deleting user:", error);
    }}
    else{
      alert ("data is not deleted")
    }
  };

  return (
    <div>
      <h2>{editId ? "Edit User" : "User Registration Form"}</h2>
      <form onSubmit={handleSubmit}>
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
        <div>
          <label>User Image:</label>
          <input
            type="file"
            name="userImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">{editId ? "Update" : "Submit"}</button>
      </form>

      <h2>User List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phoneNumber}</td>
              <td>
                {user.userImage && (
                  <img
                    src={`http://localhost:5000${user.userImage}`}
                    alt={user.name}
                    width="50"
                  />
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forms;

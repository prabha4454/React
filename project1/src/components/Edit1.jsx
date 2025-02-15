import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const Edit1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        picture: ''
    });

    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        // Parse query parameters from the URL
        const searchParams = new URLSearchParams(location.search);
        const name = searchParams.get('name');
        const description = searchParams.get('description');

        // Update form data with query parameter values
        setFormData(prevState => ({
            ...prevState,
            name: name || '',
            description: description || '',
            // Assuming you don't need to update price and picture from URL
        }));
    }, [location.search]);

    const handleUpdate = async () => {
        try {
            await fetch(`http://localhost:5000/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            // Reset the form data
            setFormData({
                name: '',
                description: '',
                price: '',
                picture: ''
            });
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                {/* Add input fields for price and picture if needed */}
                <button type="button" onClick={handleUpdate}>Update Product</button>
                <Link to="/Edit"><button type="button">Cancel</button></Link>
            </form>
        </div>
    );
};

export default Edit1;

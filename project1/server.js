const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydb2',{useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
},{
    collection: 'mycustomcollection',
});

const User = mongoose.model('User', userSchema);

// Register a new user
app.post('/api/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

/* product */
const userSchema1 = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    picture: String,
},{
    collection: 'productcollection'
});

const User1 = mongoose.model('User1', userSchema1);

// Register a new user
app.post('/api/product', async (req, res) => {
    try {
        const { name, description, price, picture } = req.body;
       
        const user = new User1({ name, description, price, picture });
        await user.save();
        res.status(201).json({ message: 'User created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Login failed. User not found'});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Login failed. Invalid password'});
        }

        // If credentials are valid, generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

const userSchema2 = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    street: String,
    city: String,
    dno: String,
    pincode: String,
    altphn: String,
},{
    collection: 'customerdetails'
});

const User2 = mongoose.model('User2', userSchema2);

// customerdetails a new user
app.post('/api/cusdetails', async (req, res) => {
    try {
        const { name, phone, address, street, city, dno, pincode, altphn } = req.body;
        console.log(name, phone, address, street, city, dno, pincode, altphn)
        const user = new User2({ name, phone, address, street, city, dno, pincode, altphn  });
        await user.save();
        res.status(201).json({ message: 'User created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await User1.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/api/products/id/', async (req, res) => {
    try {
        // Extract name and price from request query parameters
        const { name, price } = req.query;

        // Define filter criteria based on provided name and price
        const filter = {};
        if (name) filter.name = name;
        if (price) filter.price = price;

        // Query the database using the filter criteria
        const products = await User1.find(filter);

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a product
app.delete('/api/product/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const deletedProduct = await User1.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Update a product
app.put('/api/product/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, description, price, picture } = req.body;

        const updatedProduct = await User1.findByIdAndUpdate(productId, {
            name,
            description,
            price,
            picture
        }, { new: true });              

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
 
// Protected route example
app.get('/api/protected', (req, res) => {
    // Middleware should verify JWT token before reaching here
    res.json({ message: 'Protected route accessed successfully' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
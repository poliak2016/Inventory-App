const express = require('express');
const cors = require('cors');
const Category = require('./models/category');
require('./db');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);
const categoryRoutes = require('./routes/categories'); 
app.use('/api/categories', categoryRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));

console.log(typeof  categoryRoutes);
const express = require('express');
const cors = require('cors');
const Category = require('./models/category');
require('./db');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories'); 
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes); 
const testRoutes = require('./routes/test');
console.log('typeof categoryRoutes:', typeof categoryRoutes);
app.use('/api/test', testRoutes);

app.get('/', (req, res) => {
  res.send('Serwer działa!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));

console.log(typeof  categoryRoutes);
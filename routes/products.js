const express = require('express');
const router = express.Router();
const Product = require ('../models/product');

router.get('/', async (req, res) => {
  const products =await Product.find();
  res.json(products)
});

router.post('/', async (req, res) =>{
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
});

router.delete('/:id', async (req, res) => {
  try{
    await Product.findByIdAndDelete(req.params.id);
   res.status(200).json({ message: 'Produkt usunięty'});
} catch (error) {
  res.status(500).json({error: 'Nie udało usunąć produkt'});
}
});

module.exports =  router;
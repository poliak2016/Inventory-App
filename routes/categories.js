const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Отримати всі категорії
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({
      message: 'Помилка при отриманні категорій',
      error: err.message
    });
  }
});

// Додати нову категорію
router.post('/', async (req, res) => {
  try {
    const category = new Category({ name: req.body.name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({
      message: 'Помилка при створенні категорії',
      error: err.message
    });
  }
});

module.exports = router;
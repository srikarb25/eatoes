const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuModel');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) Add new menu item
router.post('/', async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Update a menu item (imageUrl or anything)
router.put('/:id', async (req, res) => {
    try {
      const updatedItem = await MenuItem.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

module.exports = router;

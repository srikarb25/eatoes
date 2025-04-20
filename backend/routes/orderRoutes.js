const express = require('express');
const router = express.Router();
const { User, Order } = require('../models');

// Place an order
router.post('/', async (req, res) => {
  try {
    const { name, phone, items, totalPrice } = req.body;

    let user = await User.findOne({ where: { phone } });
    if (!user) {
      user = await User.create({ name, phone });
    }

    const order = await Order.create({
      items,
      totalPrice,
      UserId: user.id
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get order history by phone number
router.get('/history/:phone', async (req, res) => {
  try {
    const user = await User.findOne({ where: { phone: req.params.phone } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const orders = await Order.findAll({ where: { UserId: user.id } ,
        include: {
            model: User,
            attributes: ['name', 'phone']
          },
          order: [['createdAt', 'DESC']],
          limit: 5
        });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

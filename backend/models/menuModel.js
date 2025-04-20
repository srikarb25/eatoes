const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);

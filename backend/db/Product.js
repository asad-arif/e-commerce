const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  userId: String,
  company: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;

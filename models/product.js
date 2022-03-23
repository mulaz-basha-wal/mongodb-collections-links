var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  price: { type: Number, required: true, maxlength: 500 },
  availability: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);

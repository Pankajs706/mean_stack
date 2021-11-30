const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  id: String,
  name: String,
  color: { type: String, required: false, default: "white" },
  icon: { type: String, required: true, default: "icon" },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
});

exports.products = mongoose.model("products", productSchema);

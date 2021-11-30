const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  id: String,
  name: String,
  color: { type: String, required: false, default: "white" },
  icon: { type: String, required: true, default: "icon" },
});

exports.categories = mongoose.model("categories", categorySchema);

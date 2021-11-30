const express = require("express");

const router = express.Router();
const {
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getAllProducts,
} = require("../Controller/product.controller");
//const categories=require('../model/category ')
router.get("/:id/products", getAllProduct);
// router.get('/:id/products', productController.getAllProducts());
router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);
router.post("/", createProduct);

module.exports = router;

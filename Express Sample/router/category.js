const express = require("express");

//const { categories } = require('../model/category');
const router = express.Router();
const {
  getAllCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
  createCategory,
} = require("../Controller/categoryController");
//const categories=require('../model/category ')
router.get("/", getAllCategory);
router.get("/:id", getOneCategory);
router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);
router.post("/", createCategory);

// router.post("/",async(req,res)=>{
//     const category=new categories({
//         name:req.body.name,
//         color:req.body.color,
//         icon:req.body.icon,
//     });
//     try{
//         const createdCategory=await categories.create(category);
//         if(!createdCategory)
//         return
//     }

module.exports = router;

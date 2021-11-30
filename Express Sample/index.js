// setTimeout(()=>{
//     console.log("Express Js ")
// },4000);

const express = require("express");
const cors = require("cors");
const categories = require("./model/categories");
const mongoose = require("mongoose");
const index = express();
const { port, connectionString, api } = require("./config/config");
const categoryRoutes = require("./router/category");
const productRoutes = require("./router/product");
index.use(express.json());
// const port=3000;
// const connectionString='mongodb://localhost:27017/eshop';

///route
//index.use('/',(req,res)=>{
// index.get('/api/v1/customer',(req,res)=>{
index.get(`${api}/test`, (req, res) => {
  // res.send('Hello World');
  //    res.send({message:"Sucess",data:{name:"Pankaj",age:21}}).status(200);
  res.send("App is running").status(200);
});
index.use(cors());
index.use(`${api}/products`, productRoutes);
index.use(`${api}/categories`, categoryRoutes);

index.listen(port, () => {
  console.log(`App successfully started ${port}`);
});

mongoose
  .connect(connectionString, {
    // userNewUrlParser:true,
    // userUnifiedTopology:true,
    dbName: "eshop",
    // userfindAndModify:false,
  })
  .then((data) => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log(`DB connected err ${err}`);
  });

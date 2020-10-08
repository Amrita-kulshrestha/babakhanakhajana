const express= require("express");
const bodyParser =require("body-parser");
const mongoose= require("mongoose");
const shortid = require("require");

const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/babakhanakhajana-db",{
useNewUrlParser:true,
useCreatteIndex:true,
useUniFiedTopology:true,});

const Product = mongoose.model( "products", new mongoose.Schema({_id:{type: String, default: shortid.generate},
title:String,
description:String,
image:String,
Price:Number,
category:[String],
})
);
app.get("/api/products",(req,res)=>{
const product = await Product.find({});
res.send(products);
})
;

app.post("/api/product",async(req,res)=>{
const newProduct=new Product(req.body)
const savedproduct = await newProduct.save();
res.send(savedProduct);
});


app.delete("/api/products/:id",async(req,res)=>{
const deletedProduct = await Product.findByIdAndDelete(req.params.id);
res.send(deletedProduct);
});
const port =process.env.PORT||3000;
app.listen(port,()=> console.log("serve at http://localhost:3000"));




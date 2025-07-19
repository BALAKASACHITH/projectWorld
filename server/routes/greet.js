const express=require("express");
const router=express();
router.get("/",(req,res)=>{
    res.send("nothing");
})
router.get("/hi",(req,res)=>{
    res.send("greeting hi");
})
router.get("/hello",(req,res)=>{
    res.send("greeting hello");
})
router.get("/welcome",(req,res)=>{
    res.send("greeting welcome");
})
module.exports=router;
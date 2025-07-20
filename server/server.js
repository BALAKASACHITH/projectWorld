const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
require("./config/db");
const Data=require("./routes/Data");
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/Data",Data)
dotenv.config({path:"../.env"});
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("hello best of luck");
})
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})
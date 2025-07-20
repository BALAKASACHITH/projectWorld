const mongoose=require("mongoose");
const sch=new mongoose.Schema({
    fromroll:String,
    toroll:String,
    toprojectname:String,
    name:String,
    contact:String,
    rate:Number
})
module.exports=mongoose.model("Collaborator",sch);
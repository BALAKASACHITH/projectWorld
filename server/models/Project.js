const mongoose=require("mongoose");
const sch=new mongoose.Schema({
    roll:String,
    projectname:String,
    state:String,
    techstack:String,
    description:String
})
module.exports=mongoose.model("Project",sch);
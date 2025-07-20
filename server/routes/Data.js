const express=require("express");
const Project=require("../models/Project");
const router=express();
router.get("/all",async (req,res)=>{
    try{
        const data=await Project.find();
        res.json(data);
    }catch(e){
        res.json({success:false,error:e})
    }
});
router.post("/add",async (req,res)=>{
    const {roll,projectname,state,techstack,description}=req.body;
    try{
        const user=await Project.findOne({roll,projectname});
        const n=new Project({
            roll:roll,
            projectname:projectname,
            state:state,
            techstack:techstack,
            description:description
        })
        await n.save();
        res.json({success:true})
    }catch(e){
        res.json({success:false,error:e})
    }
})
module.exports=router;
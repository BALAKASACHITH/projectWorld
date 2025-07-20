const express=require("express");
const Project=require("../models/Project");
const Collaborator=require("../models/Collaborator");
const router=express();
router.get("/all",async (req,res)=>{
    try{
        const data=await Project.find();
        res.json(data);
    }catch(e){
        res.json({success:false,error:e})
    }
});
router.get("/coll",async (req,res)=>{
    try{
        const data=await Collaborator.find();
        res.json(data);
    }catch(e){
        res.json({success:false,error:e})
    }
});
router.post("/Collaborate",async (req,res)=>{
    const{fromroll,toroll,toprojectname,name,contact,rate}=req.body;
    try{
        const nc=new Collaborator({
            fromroll,
            toroll,
            toprojectname,
            name,
            contact,
            rate
        })
        await nc.save();
        const d=await Collaborator.find();
        res.json({success:true,n:d})
    }catch(e){
        res.json({success:false,error:e})
    }
})
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
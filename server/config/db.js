const mongoose=require("mongoose");
const connectDB=async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/projectWorld");
        console.log("Database Connected Successfully");
    }catch(e){
        console.error(`Database not connected error : $}{e}`);
    }
}
connectDB();
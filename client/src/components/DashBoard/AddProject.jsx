import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Mes from "../common/Mes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddProject() {
    const navigate=useNavigate();
    const [projectname, setProjectName] = useState("");
    const [state, setState] = useState("");
    const [techstack, setTechState] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [kind, setKind] = useState("bad");
    const roll=JSON.parse(localStorage.getItem("user")).roll;
    const handleSubmit = async () => {
        if (!projectname || !state || !techstack || !description) {
            setKind("bad");
            setMessage("!! All fields are required !!");
            return;
        }
        try{
            const body={
                roll,
                projectname,
                state,
                techstack,
                description
            }
            const res=await axios.post("http://localhost:3000/Data/add",body)
            console.log(res.data);
            setKind("good");
            setMessage("!! Project added successfully !!");
            setTimeout(()=>{
                navigate("/DashBoard/Yours")
            },100);
        }catch(e){
            setKind("bad");
            setMessage(`!! server error ${e} !!`);
        }
    };

    return (
        <div className="AddProject">
            <div className="close">back</div>
            <div className="AddProjectForm">
                <Input 
                    placeholder="Enter Project Name" 
                    value={projectname} 
                    setValue={setProjectName} 
                />
                <Input 
                    placeholder="Enter Project State (e.g., upcoming/ongoing/completed)" 
                    value={state} 
                    setValue={setState} 
                />
                <Input 
                    placeholder="Enter Tech Stack" 
                    value={techstack} 
                    setValue={setTechState} 
                />
                <Input 
                    placeholder="Enter Project Description" 
                    value={description} 
                    setValue={setDescription} 
                />
                <Mes kind={kind} value={message} setValue={setMessage} />
                <Button value="Add Project" action={handleSubmit} />
            </div>
        </div>
    );
}

import { useEffect,useState } from "react"
import { useNavigate,Navigate } from "react-router-dom";
import Input from "../common/Input";
import Mes from "../common/Mes";
import Button from "../common/Button";
import axios from "axios"
export default function Collaborate(){
    const to=JSON.parse(localStorage.getItem("Collaborate"));
    const fromroll=JSON.parse(localStorage.getItem("user")).roll;
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [contact,setContact]=useState("");
    const [rate,setRate]=useState();
    const [message,setMessage]=useState("");
    const [kind,setKind]=useState("bad");
    useEffect(()=>{
        return ()=>localStorage.removeItem("Collaborate");
    },[])
    if(!to){
        return <Navigate to="/DashBoard"/>;
    }
    const cl=()=>{
        navigate("../");
    }
    const handle = async () => {
        if (!name || !contact || !rate) {
            setKind("bad");
            setMessage("!! Please fill all fields !!");
            return;
        }
        try {
            const body = {
                fromroll,
                toroll: to.roll,
                toprojectname: to.projectname,  // Added project name of the target user
                name,
                contact,
                rate,
            };
            await axios.post("http://localhost:3000/Data/Collaborate", body);
            setKind("good");
            setMessage("Collaboration request sent!");
            setTimeout(() => {
                navigate("/DashBoard");
            }, 2000);
        } catch (e) {
            console.error("Error sending data:", e);
            setKind("bad");
            setMessage("!! Failed to send collaboration request !!");
        }
    };
    return(
        <div className="Collaborate">
            <div className="close" onClick={cl}>close</div>
            <div className="Cbot">
                <Input placeholder="Enter Username" value={name} setValue={setName}/>
                <Input placeholder="Enter contact(number/emailid)" value={contact} setValue={setContact}/>
                <Input placeholder="Rate yourself in this respective techstack out of 10" value={rate} setValue={setRate} type="Number"/>
                <Mes kind={kind} value={message} setValue={setMessage} />
                <Button value="Login" action={handle} />
            </div>
        </div>
    )
}
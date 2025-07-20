import Input from "../common/Input"
import Button from "../common/Button"
import Mes from "../common/Mes"
import {useState } from "react"
import pLogo from "../../../images/pLogo.png"
import {useNavigate} from "react-router-dom"
export default function Land(){
    const navigate=useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const [kind,setKind]=useState("bad");
    const handle=()=>{
        const name=userName;
        const pass=password;
        if(!name&&!pass){
            setKind("bad");
            setMessage("!! Enter The Details !!")
            return;
        }
        if(!name){
            setKind("bad");
            setMessage("!! Enter The UserName !!")
            return;
        }
        if(!pass){
            setKind("bad");
            setMessage("!! Enter The Password !!")
            return;
        }
        if(!name.includes("33")){
            setKind("bad");
            setMessage("!! Not A Student Of MVGR This Is Only For MVGR Students !!")
            return;
        }
        if(pass!="webcap"){
            setKind("bad");
            setMessage("!! Wrong Password !!")
            return;
        }
        localStorage.setItem("user",JSON.stringify({
            roll:name,
        }));
        setKind("good");
        setMessage("!! Login Verrified !!");
        navigate("/DashBoard");
    }
    return(
        <div className="Land">
            <div className="LeftLand" >
                <img className="Logo" src={pLogo} alt="Logo" />
            </div>
            <div className="RightLand" >
                <div className="Login" >
                    <Input placeholder="Enter Username" value={userName} setValue={setUserName}/>
                    <Input placeholder="Enter Password" value={password} setValue={setPassword} type="password"/>
                    <Mes kind={kind} value={message} setValue={setMessage} />
                    <Button value="Login" action={handle} />
                </div>
            </div>
        </div>
    )
}
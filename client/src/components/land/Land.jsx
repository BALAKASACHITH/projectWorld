import Input from "../common/Input"
import Button from "../common/Button"
import { useState } from "react"
import pLogo from "../../../images/pLogo.png"
export default function Land(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const handle=()=>{
        console.log("clicked button");
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
                    <Button value="Login" action={handle} />
                </div>
            </div>
        </div>
    )
}
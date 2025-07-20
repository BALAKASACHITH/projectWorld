import { Navigate ,useNavigate} from "react-router-dom";
import { useEffect } from "react";
export default function View(){
    const navigate=useNavigate();
    const user=JSON.parse(localStorage.getItem("View"));
    useEffect(()=>{
        return ()=>{
            localStorage.removeItem("View");
        }
    },[]);
    if(!user){
        return <Navigate to="/DashBoard"/>;
    }
    const cl=()=>{
        navigate("/DashBoard/Yours/Collaborators");
    }
    return(
        <div className="View">
            <div className="close" onClick={cl}>close</div>
            <div className="Shows">
                <h2>Roll : {user.fromroll}</h2>
                <h2>Name : {user.name}</h2>
                <h2>Contact : {user.contact}</h2>
                <h2>Rate : {user.rate}</h2>
            </div>
        </div>
    )
}
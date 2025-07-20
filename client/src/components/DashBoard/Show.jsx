import { Navigate ,useNavigate} from "react-router-dom";
import { useEffect } from "react";
export default function Show(){
    const navigate=useNavigate();
    const user=JSON.parse(localStorage.getItem("Show"));
    useEffect(()=>{
        return ()=>{
            localStorage.removeItem("Show");
        }
    },[]);
    if(!user){
        return <Navigate to="/DashBoard"/>;
    }
    const cl=()=>{
        navigate("../");
    }
    return(
        <div className="Show">
            <div className="close" onClick={cl}>close</div>
            <div className="Shows">
                <h2>Roll No : {user.roll}</h2>
                <h2>Project Name : {user.projectname}</h2>
                <h2>State : {user.state}</h2>
                <h2>Tech Stack : {user.techstack}</h2>
                <h2>Description : {user.description}</h2>
            </div>
        </div>
    )
}
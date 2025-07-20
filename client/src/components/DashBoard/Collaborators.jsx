import { Navigate } from "react-router-dom";
export default function Collaborators(){
    const helpedto=JSON.parse(localStorage.getItem("search"));
    console.log(helpedto)
    if(!helpedto){
        return <Navigate to="/DashBoard/Yours"/>
    }
    return(
        <div className="Collaborators">
            Collaborators
        </div>
    )
}
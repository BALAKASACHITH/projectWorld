import {useNavigate} from "react-router-dom";
export default function YourUser({roll,projectname,state,description,techstack}){
    const navigate=useNavigate();
    const Show=()=>{
        localStorage.setItem("Show",JSON.stringify({
            roll:roll,
            projectname:projectname,
            state:state,
            description:description,
            techstack:techstack
        }))
        navigate("/DashBoard/Show");
    }
    const Collaborate=()=>{
        localStorage.setItem("search",JSON.stringify({
            roll:roll,
            projectname:projectname
        }))
        navigate("Collaborators");
    }
    return(
        <div className="OtherUser">
            <div className="Oleft"><h2>{projectname}</h2></div>
            <div className="Oright">
                <div className="Showop" onClick={Show}>Show</div>
                <div className="Collaborateop" onClick={Collaborate}>Collaborators</div>
            </div>
        </div>
    )
}
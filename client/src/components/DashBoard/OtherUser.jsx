import {useNavigate} from "react-router-dom";
export default function OtherUser({roll,projectname,state,description,techstack}){
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
        localStorage.setItem("Collaborate",JSON.stringify({
            roll:roll,
            projectname:projectname
        }))
        navigate("/DashBoard/Collaborate");
    }
    return(
        <div className="OtherUser">
            <div className="Oleft"><h2>{roll}</h2></div>
            <div className="Oright">
                <div className="Showop" onClick={Show}>Show</div>
                <div className="Collaborateop" onClick={Collaborate}>Collaborate</div>
            </div>
        </div>
    )
}
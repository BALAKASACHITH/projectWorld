import {useNavigate} from "react-router-dom";
export default function CollabUser({fromroll,name,contact,rate}){
    const navigate=useNavigate();
    const Show=()=>{
        localStorage.setItem("View",JSON.stringify({
            fromroll,
            name,
            contact,
            rate
        }))
        navigate("View")
    }
    return(
        <div className="OtherUser">
            <div className="Oleft"><h2>{fromroll}</h2></div>
            <div className="Oright">
                <div className="Showop" onClick={Show}>Show</div>
            </div>
        </div>
    )
}
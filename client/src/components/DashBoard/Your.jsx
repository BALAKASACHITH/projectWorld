import { useEffect ,useState} from "react";
import YourUser from "./YourUser";
import {Navigate,useNavigate} from "react-router-dom";
import axios from "axios";
export default function Your(){
    const roll=JSON.parse(localStorage.getItem("user")).roll;
    const[data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const getData=async ()=>{
            const roll=JSON.parse(localStorage.getItem("user")).roll;
            const res=await axios.get("http://localhost:3000/Data/all");
            const n=res.data.filter((el)=>{
                return el.roll==roll;
            })
            setData(n);
        }
        getData();
    },[])
    if(!roll){
        return <Navigate to="/"/>;
    }
    const add=()=>{
        navigate("AddProject");
    }
    return(
        <div className="Your" >
            <div className="Add" onClick={add}>+</div>
            <div className="Yoursection">
                {
                    data.length>0?(
                        data.map((el,ind)=>(
                            <YourUser key={ind} roll={el.roll} projectname={el.projectname} state={el.state} description={el.description} techstack={el.techstack} />
                        ))
                    ):(
                        <p>No Projects Added Yet</p>
                    )
                }
            </div>
        </div>
    )
}
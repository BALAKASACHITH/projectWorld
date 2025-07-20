import { useEffect,useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import axios from "axios";
import CollabUser from "./CollabUser";
export default function Collaborators(){
    const helpedto=JSON.parse(localStorage.getItem("search"));
    const toroll=JSON.parse(localStorage.getItem("user")).roll;
    const navigate=useNavigate();
    const[data,setData]=useState([]);
    console.log(toroll);
    useEffect(()=>{
        const getData=async ()=>{
            const roll=JSON.parse(localStorage.getItem("user")).roll;
            const projectname=JSON.parse(localStorage.getItem("search")).projectname;
            const res=await axios.get("http://localhost:3000/Data/coll");
            const n=res.data.filter((el)=>{
                return el.toroll==roll&&el.toprojectname==projectname;
            })
            const ne=n.sort((a,b)=>{
                return a.rate-b.rate;
            })
            setData(ne);
        }
        getData();
    },[])
    console.log(data);
    if(!helpedto){
        return <Navigate to="/DashBoard/Yours"/>
    }
    const cl=()=>{
        navigate("/DashBoard/Yours");
    }
    return(
        <div className="Collaborators">
            <div className="close" onClick={cl}>close</div>
            <div className="coldet">
                {
                    data.length>0?(
                        data.map((el,ind)=>(
                            <CollabUser key={ind} fromroll={el.fromroll} name={el.name} contact={el.contact} rate={el.rate} />
                        ))
                    ):(
                        <h1>No Collaborators</h1>
                    )
                }
            </div>
        </div>
    )
}
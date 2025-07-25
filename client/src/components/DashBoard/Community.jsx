import OtherUser from "./OtherUser"
import axios from 'axios'
import {useEffect,useState} from 'react';
export default function Community(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        const getit=async ()=>{
            const uroll=JSON.parse(localStorage.getItem("user")).roll;
            try{
                const res=await axios.get("http://localhost:3000/Data/all");
                const d=res.data.filter((el)=>{
                    return el.roll!=uroll;
                })
                setData(d);
            }catch(e){
                console.error("Catched error in getting ",e)
            }
        }
        getit();
    },[])
    return(
        <div className="Community" >
            {
                data.length>0?(
                    data.map((item,ind)=>(
                        <OtherUser
                            key={ind}
                            roll={item.roll}
                            projectname={item.projectname}
                            state={item.state}
                            techstack={item.techstack}
                            description={item.description}
                        />
                    ))
                ):(
                    <p>No projects posted yet</p>
                )
            }
        </div>
    )
}
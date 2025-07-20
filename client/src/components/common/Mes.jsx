import { useEffect } from "react";
export default function Mes({kind,value,setValue}){
    const getClassName=()=>{
        return kind=="good"?"Mes good":"Mes bad";
    }
    useEffect(()=>{
        if(!value) return;
        const timer=setTimeout(()=>{
            setValue("");
        },3000)
        return ()=>clearTimeout(timer);
    },[value,setValue])
    return(
        value?<div className={getClassName()}>{value}</div>:null
    )
}
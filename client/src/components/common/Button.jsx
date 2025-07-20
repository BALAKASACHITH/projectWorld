export default function Button({value,action}){
    return(
        <button className="Button" onClick={action} >
            {value}
        </button>
    )
}
export default function Input({placeholder, value,setValue,type="text"}){
    return(
        <input 
        className="Input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
    )
}
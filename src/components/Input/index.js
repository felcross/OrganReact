import './Input.css'



export const Input = (props)=>{

 
   
const ontyping =(event) =>{
   props.onChange(event.target.value)
   
}

 return(  <div className="input">
    <label>{props.label}</label>
    <input value={props.value} onChange={ontyping} required={props.required}  placeholder={`${props.placeholder}...`} />
   </div>)

}

 
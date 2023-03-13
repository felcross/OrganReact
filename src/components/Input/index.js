import './Input.css'



export const Input = (props)=>{

 
   
const ontyping =(event) =>{
   props.onChange(event.target.value)
   
}

 return(  <div className={`input input${props.type}`}>
    <label>{props.label}</label>
    <input value={props.value} onChange={ontyping} required={props.required} type={props.type}placeholder={`${props.placeholder}...`} />
   </div>)

}

 
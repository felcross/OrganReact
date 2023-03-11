import './Input.css'

export const Input = (props)=>{

 return(  <div className="input">
    <label>{props.label}</label>
    <input  required={props.required}  placeholder={`${props.placeholder}...`} />
   </div>)

}

 
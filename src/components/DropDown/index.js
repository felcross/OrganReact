import './Drop.css'

export const Drop = (props) =>{
    const ontyping =(event) =>{
        props.onChange(event.target.value)
        
     }
     
return(

    <div className='drop'>
        <label>{props.label}</label>
        <select required={props.required} value={props.value} onChange={ontyping}>
        <option value={""}></option>
            {props.itens.map(item =><option key={item}>{item}</option>)}
        </select>
    </div>
)

}
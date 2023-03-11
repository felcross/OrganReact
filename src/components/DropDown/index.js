import './Drop.css'

export const Drop = (props) =>{
return(

    <div className='drop'>
        <label>{props.label}</label>
        <select>
            {props.itens.map(item =><option key={item}>{item}</option>)}
        </select>
    </div>
)

}
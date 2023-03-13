import './Card.css'
import { AiFillCloseCircle } from 'react-icons/ai';

export const Card = ({nome,img,cargo,onDelete,background,id}) =>{
    
     
return(

    <div className='card'>
        <AiFillCloseCircle size={25} className='deletar' onClick={() => onDelete(id)} />
        <div className='header' style={{background:background}}>
            <img src={img} alt={nome}/>
        </div>

        <div className='footer'>
         <h4>{nome}</h4>
         <h5>{cargo}</h5>
         
        </div>
    
    </div>
)

}
import './Card.css'

export const Card = ({nome,img,cargo,time,background}) =>{
    
     
return(

    <div className='card'>
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
import './Team.css'
import { Card } from '../Card'

export const Team = (props) => {

    return(
         <>{props.users.length > 0 &&<section className='team' style={{backgroundColor:props.primaryColor}}>
             <input onChange={event => props.colorChange(event.target.value,props.id)} value={props.secondaryColor}type='color' className='input-color'/>
             <h3 style={{borderColor: props.secondaryColor}} >{props.title}</h3>
           <div className='user'>
           {props.users.map((user,index)=>{
               return <Card background={props.secondaryColor} 
               key={index} 
               nome={user.nome} 
               cargo={user.cargo} 
               img={user.imagem} 
               time={user.time}
               id={user.id} 
               onDelete={props.onDelete}/>
                    }
            )}
           </div>
          </section>}</>


    )

}
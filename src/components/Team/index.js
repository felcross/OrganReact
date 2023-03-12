import './Team.css'
import { Card } from '../Card'

export const Team = (props) => {

    return(
         <>{props.users.length > 0 &&<section className='team' style={{backgroundColor:props.primaryColor}}>
             <h3 style={{borderColor: props.secondaryColor}} >{props.title}</h3>
           <div className='user'>
           {props.users.map(user=><Card background={props.secondaryColor} key={user.nome} nome={user.nome} cargo={user.cargo} img={user.imagem} time={user.time}/>)}
           </div>
          </section>}</>


    )

}
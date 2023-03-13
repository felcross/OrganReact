
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import  {Form}  from './components/Form';
import  {Team}  from './components/Team';
import  Footer  from './components/Footer';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [teans,setTeans] = useState([
    {  id:uuidv4(),
       title:'Time zero',
       primaryColor:'#d9f7e9',
       secondaryColor:'#57c298',

    },
    { id:uuidv4(),
      title:' Time Beta',
      primaryColor:'#d1f1e1',
      secondaryColor:'#17d278',

   },
   {id:uuidv4(),
    title:'Time Alfa',
    primaryColor:'#d4f3e3',
    secondaryColor:'#51c9b8',
  }
  ])

  const [users, setUsers] = useState([])

   const salvando = (user)=>{
   console.log(user)
   setUsers([...users,user])
  } 

  const deleteCard = (id)=> {
    setUsers(users.filter(user => user.id !== id))
  }

  const colorChange = (color, id)=> {
    setTeans(teans.map(team =>{
      if(team.id === id){
      team.secondaryColor= color;
      }
      return team
      
  }))
  }

  const saveTeam = (newTeam) => {

    setTeans([...teans,{...newTeam,id:uuidv4()}])

  }

  return (
        <div className="App">
      <Banner/>
      <Form title={teans.map(team => team.title)} 
      saveUser={user=>salvando(user) }
      onSubmit={saveTeam}
      type='color'
      >
        
      </Form>
      {teans.map((team,index) => 
      <Team users={users.filter(user=> user.time === team.title)} 
     colorChange={colorChange}
      key={index} 
      id={team.id}
      title={team.title} 
      primaryColor={team.primaryColor} 
      secondaryColor={team.secondaryColor}
      onDelete={deleteCard}
      />
      
      )}
      <Footer/>

      
    </div>
  );
}

export default App;

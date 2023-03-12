
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import  {Form}  from './components/Form';
import  {Team}  from './components/Team';
import  Footer  from './components/Footer';



function App() {

  const teans = [
    {
       title:'Time zero',
       primaryColor:'#d9f7e9',
       secondaryColor:'#57c298',

    },
    {
      title:' Time Beta',
      primaryColor:'#d1f1e1',
      secondaryColor:'#17d278',

   },
   {
    title:'Time Alfa',
    primaryColor:'#d4f3e3',
    secondaryColor:'#51c9b8',
  }
  ]

  const [users, setUsers] = useState([])

   const salvando = (user)=>{
   console.log(user)
   setUsers([...users,user])
  } 

  return (
        <div className="App">
      <Banner/>
      <Form title={teans.map(team => team.title)} saveUser={user=>salvando(user) }></Form>
      {teans.map((team,index) => <Team users={users.filter(user=> user.time === team.title)} key={index} title={team.title} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor}/>)}
      <Footer/>

      
    </div>
  );
}

export default App;

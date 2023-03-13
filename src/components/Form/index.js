import { Drop } from '../DropDown'
import { Input } from '../Input'
import { Submit } from '../Submit'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './Form.css'

export const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [timeNome, setTimeNome] = useState('')
    const [cor, setCor] = useState('')
    
 const onSave = (event)=>{
    event.preventDefault()
    props.saveUser({id:uuidv4(),nome,cargo,imagem,time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    
    
 }
    return(
        <section className='form'>
            
            <form onSubmit={onSave}>
            <h2>Digite os dados do card</h2>
            <Input  onChange={value =>setNome(value)} value={nome} required={true} label='Nome' placeholder='Digite seu nome'/>
            <Input  onChange={value =>setCargo(value)} value={cargo} required={true} label='Cargo' placeholder='Digite seu cargo'/>
            <Input  onChange={value =>setImagem(value)} value={imagem} label='Imagem' placeholder='botar URL de imagem'/>
            <Drop onChange={value =>setTime(value)} value={time} label='Time' required={true} itens={props.title} />
            <Submit>
                Criar Card
            </Submit>
            </form>
            <form onSubmit={(event)=>{
                event.preventDefault()
                props.onSubmit({title:timeNome,primaryColor:cor})
                setCor('')
                setTimeNome('')
            }}>
            <h2>Digite o nome do time</h2>
            <Input  onChange={value =>setCor(value)} value={cor} type={props.type} required label='Cor' />
            <Input  onChange={value =>setTimeNome(value)} value={timeNome} required label='Time' placeholder='Digite o nome do time'/>
            
            
            <Submit>
                Criar Time
            </Submit>
            </form>
        </section>
        
    )
}
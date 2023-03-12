import { Drop } from '../DropDown'
import { Input } from '../Input'
import { Submit } from '../Submit'
import { useState } from 'react'

import './Form.css'

export const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
 const onSave = (event)=>{
    event.preventDefault()
    props.saveUser({nome,cargo,imagem,time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
 }
    return(
        <section className='form'>
            
            <form onSubmit={onSave}>
            <h2>Preencha o Card do seu Time</h2>
            <Input  onChange={value =>setNome(value)} value={nome} required={true} label='Nome' placeholder='Digite seu nome'/>
            <Input  onChange={value =>setCargo(value)} value={cargo} required={true} label='Cargo' placeholder='Digite seu cargo'/>
            <Input  onChange={value =>setImagem(value)} value={imagem} label='Imagem' placeholder='botar URL de imagem'/>
            <Drop onChange={value =>setTime(value)} value={time} label='Time' required={true} itens={props.title} />
            <Submit>
                Criar Card
            </Submit>
            </form>
        </section>
    )
}
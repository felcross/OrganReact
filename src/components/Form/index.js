import { Drop } from '../DropDown'
import { Input } from '../Input'
import { Submit } from '../Submit'
import './Form.css'

export const Form = () => {
 const time = [
     'time1',
     'time2',
     'time3',
     'time4',
     'time5',
 ]
 const onSave = (event)=>{
    event.preventDefault()

    console.log("cadastrado")
 }
    return(
        <section className='form'>
            
            <form onSubmit={onSave}>
            <h2>Preencha o Card do seu Time</h2>
            <Input  required={true} label='Nome' placeholder='Digite seu nome'/>
            <Input  required={true} label='Cargo' placeholder='Digite seu cargo'/>
            <Input  label='Imagem' placeholder='botar URL de imagem'/>
            <Drop label='Time' itens={time} />
            <Submit>
                Criar Card
            </Submit>
            </form>
        </section>
    )
}
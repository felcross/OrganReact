import { Drop } from '../DropDown'
import { Input } from '../Input'
import { Submit } from '../Submit'
import './Form.css'

export const Form = () => {
    
    const [Nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')

 const time = [
     'time1',
     'time2',
     'time3',
     'time4',
     'time5',
 ]
 const onSave = (event)=>{
    event.preventDefault()

    console.log("cadastrado", Nome,Cargo,Imagem)
 }
    return(
        <section className='form'>
            
            <form onSubmit={onSave}>
            <h2>Preencha o Card do seu Time</h2>
            <Input  onChange={value =>setNome(value)} value={Nome} required={true} label='Nome' placeholder='Digite seu nome'/>
            <Input  onChange={value =>setCargo(value)} value={Cargo}required={true} label='Cargo' placeholder='Digite seu cargo'/>
            <Input  onChange={value =>setImagem(value)} value={Imagem} label='Imagem' placeholder='botar URL de imagem'/>
            <Drop label='Time' itens={time} />
            <Submit>
                Criar Card
            </Submit>
            </form>
        </section>
    )
}
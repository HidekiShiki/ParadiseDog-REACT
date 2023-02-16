import Botao from '../Botao';
import CaixaTexto from '../CaixaTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const porte = [
    "Pequeno",
    "Médio",
    "Grande"
]

const aoEnviar = (evento) =>{
    evento.preventDefault()
    console.log('enviado...')
}

const Formulario = () => {
    return (
        <section className='formulario'>
            <form onSubmit={aoEnviar}>
                <h2>Preencha os dados para criar o card</h2>
                <CaixaTexto nome="Responsavel" placeholder="Nome do responsavel"/>
                <CaixaTexto nome="Nome do Dog" placeholder="Nome do dog"/>
                <CaixaTexto nome="Raça" placeholder="Escreva a raça"/>
                <ListaSuspensa itens={porte}/>
                <Botao>Enviar</Botao>
            </form>
        </section>
    )
}

export default Formulario;
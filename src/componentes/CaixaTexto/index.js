import './CaixaTexto.css';

const CaixaTexto = (props) => {
    return (
        <div className='caixa-texto'>
            <label>{props.nome}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CaixaTexto;

<CaixaTexto/>
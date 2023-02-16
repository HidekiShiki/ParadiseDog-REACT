import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return(
        <div className='listaSuspensa'>
            <label>Selecione o porte</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;

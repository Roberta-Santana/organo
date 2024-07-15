import './Colaborador.css'

//Desestruturando o OBJETO 
const Colaborador = ({nome, cargo, imagem, corDeFundo}) =>{
    return(
    <div className='colaborador'>{/* PRECISA DE UMA DIV/SECTION GERAL*/}
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}> 
            <img src={imagem} alt={nome}></img>
        </div>
        <div className='rodape_colab'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    )
}

/* const Colaborador = ( =>{
    return(
    <div className='colaborador'>{PRECISA DE UMA DIV/SECTION GERAL}
        <div className='cabecalho'> 
            <img src={imagem} alt={nome}></img>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    )
} */

export default Colaborador
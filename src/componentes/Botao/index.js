import './Botao.css';

const Botao = (props)=>{
    return(
        <button className='botao'>
        {/*{props.texto} = passando o texto como var/atributo no formulario.js */}
        {props.children}{/* os filhos da TAG BOTAO serão passados*/}
        </button>
    /* Por padrão, a tag button já é um submit */
    )
}

export default Botao;
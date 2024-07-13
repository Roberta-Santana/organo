//BOAS PRATICAS: CRIAÇÃO DE VAR/CONST QUE RECEBE UMA FUNÇÃO,
//QUE É EXPORTADA AO FINAL. obs> Componet React LETRA MAIUSCULA

import "./CampoTexto.css"

const CampoTexto = (props)=>{

    const placeholderModificada = `S2 ${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
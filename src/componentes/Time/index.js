import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props)=>{
    const css={backgroundColor:props.corSecundaria,
        borderColor:props.corPrimaria
    }
    
    return(

        //renderização condicional:
        (props.colaboradores.length>0) && <section className="time" style={css}>
            <h1>Minha Organização</h1>
            <h3 style={css}>{props.nome}</h3>
            
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador)=> 
                    <Colaborador corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}/>)
                }
            </div>
        </section>
    )
}

export default Time;
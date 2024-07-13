import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario=()=>{

const times = [ 'Programação', 'Front-End','Data Science', 'Devops', 
    'UX e Desing', 'Mobile', 'Inovação e Gestão']

const aoSalvar = (evento)=>{
    evento.preventDefault();
    console.log('O Form foi submetido')
}

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o Card do colaborador</h2>
            <CampoTexto obrigatorio={true} label='Nome' placeholder="Digite seu nome"/>
            <CampoTexto label='Cargo' placeholder="Digite seu cargo"/>
            <CampoTexto label='Imagem' placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label='Time' itens = {times}/>
            <Botao /*texto="Criar Card"*/>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario;
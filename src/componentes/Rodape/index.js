import './Rodape.css'

export const Rodape=()=> {
    return(
        <footer className='rodape'>
            <div className='redes_sociais'>
                <img src='/imagens/fb.png' alt='logo facebook'></img>
                <img src='/imagens/tw.png' alt='logo twitter'></img>
                <img src='/imagens/ig.png' alt='logo instagram'></img>
            </div>
            <div className='logo'>
                <img src='./imagens/logo.png' alt='logo'></img>
            </div>
            <div className='autoria'>
                <p>Desenvolvido por <strong>Roberta Santana</strong></p>
            </div>
        </footer>
    )
}
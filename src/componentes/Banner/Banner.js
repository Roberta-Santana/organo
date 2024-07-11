import './Banner.css'

export const Banner = ()=> {
    //JSX(Como o react trabalha com a parte visual)
    return(
        <header className='banner'>
        <img src="/imagens/banner.png" alt="Banner principal"></img>
        </header>
    )
}

/* ALTERANDO EXPORT:
Os compomentes .js podem ser exportados:
1 - diretamento como arq index.js p cada pasta/componente;
2 - através de index.js intermediário: nesse caso, o 
    componente.js é uma const exportada -> export const
    index.js importa a {const} e envia como export default 
 */
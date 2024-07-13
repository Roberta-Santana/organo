import "./ListaSuspensa.css"

const ListaSuspensa = (props)=>{
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
                <select>{props.itens.map(item=><option key={item}>{item}</option>)}
                        {/* item=>{return <option>{item}</option>} */}
                </select>
        </div>
    )
}

export default ListaSuspensa; 
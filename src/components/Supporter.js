import styles from "../style/components/Supporter.css"
function Supporter({patrocinador}){

    return(
        <div className="container">
            <div className="patrocinadorImagem"> 
                <img src={patrocinador.src}></img>
            </div>
            <h3 className="patrocinadorTexto">{patrocinador.name}</h3>
        </div>
    )
}

export default Supporter

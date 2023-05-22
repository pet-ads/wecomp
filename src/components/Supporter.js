import styles from "../style/components/Supporter.css"
function Supporter({patrocinador}){

    return(
        <div className="container">
            <div className="patrocinadorImagem"> 
                <img src={patrocinador[0]}></img>
            </div>
            <h3 className="patrocinadorTexto">{patrocinador[1]}</h3>
        </div>
    )
}

export default Supporter

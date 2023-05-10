import Patrocinador from "./Patrocinador"
import styles from ""../style/components/Patrocinios.module.css"

function Patrocinios({imagens}){
    return(
        <div className={styles.patrocinios}>
            <h1 className={styles.texto}>Patrocínios</h1>
            <div className={styles.patrocinadores}>

           
            {imagens.map((patrocinador, index) => (
                <Patrocinador key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Patrocinios

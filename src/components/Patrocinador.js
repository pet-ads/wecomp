import styles from './Patrocinador.module.css'
function Patrocinador({patrocinador}){

    return(
        <div className={styles.container}>
            <div className={styles.patrocinadorImagem}> 
                <img src={patrocinador[0]}></img>
            </div>
            <h3 className={styles.patrocinadorTexto}>{patrocinador[1]}</h3>
        </div>
    )
}

export default Patrocinador

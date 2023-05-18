import Patrocinador from "./Patrocinador";
import "../style/components/Patrocinios.css";

function Patrocinios({imagens}){
    return(
        <div className="patrocinios">
            <h1 className="texto">Patrocínios</h1>
            <div className="patrocinadores">

           
            {imagens.map((patrocinador, index) => (
                <Patrocinador key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Patrocinios

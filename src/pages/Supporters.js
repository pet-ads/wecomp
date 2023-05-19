import Patrocinador from "../components/Supporter";
import "../style/pages/Supporters.css";

function Supporters({imagens}){
    return(
        <div id="patrocinios" className="patrocinios">
            <h1 className="texto">Apoio</h1>
            <div className="patrocinadores">

           
            {imagens.map((patrocinador, index) => (
                <Patrocinador key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Supporters

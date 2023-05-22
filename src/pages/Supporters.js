import Supporter from "../components/Supporter";
import "../style/pages/Supporters.css";
import logos from "../JSONs/logos.json";

function Supporters(){
    return(
        <div id="patrocinios" className="patrocinios">
            <h1 className="texto">Apoio</h1>
            
            <div className="patrocinadores">

            {logos.supporters.map((logo) => (
                <Supporter key={logo.id} patrocinador={logo} />
                ))}
            </div>
        </div>
    )
}

export default Supporters

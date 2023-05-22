import Supporter from "../components/Supporter";
import "../style/pages/Supporters.css";

const logos = [
    ["http://via.placeholder.com/640x360", "Patrocinador1"],
    ["http://via.placeholder.com/100x50", "Patrocinador2"],
    ["http://via.placeholder.com/300x300", "Patrocinador3"],
    ["http://via.placeholder.com/400x200", "Patrocinador4"],
    ["http://via.placeholder.com/200x400", "Patrocinador5"],
    ]

function Supporters(){
    return(
        <div id="patrocinios" className="patrocinios">
            <h1 className="texto">Apoio</h1>
            
            <div className="patrocinadores">

            {logos.map((patrocinador, index) => (
                <Supporter key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Supporters

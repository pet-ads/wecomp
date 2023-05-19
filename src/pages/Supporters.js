import Patrocinador from "../components/Supporter";
import "../style/pages/Supporters.css";

const logos = [
    ["http://via.placeholder.com/640x360", "Lego"],
    ["http://via.placeholder.com/100x50", "Lego"],
    ["http://via.placeholder.com/300x300", "Lego"],
    ["http://via.placeholder.com/400x200", "Lego"],
    ["http://via.placeholder.com/200x400", "Lego"],
    
    ]

function Supporters(){
    return(
        <div id="patrocinios" className="patrocinios">
            <h1 className="texto">Apoio</h1>
            <div className="patrocinadores">

           
            {logos.map((patrocinador, index) => (
                <Patrocinador key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Supporters

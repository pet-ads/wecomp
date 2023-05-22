import "../style/pages/Organizers.css";
import Button from "../components/Button";
import Organizer from "../components/Organizer";

const logos2 = [
    ["https://iamfounder.com.br/images/logo-onovolab.png", "Onovolab"],
    ["http://pet_ads.paginas.scl.ifsp.edu.br/assets/logo_PET.svg", "PET/ADS"],
    ["https://portais.ifsp.edu.br/scl/images/Logo_Campus/Marca_IFSP_2015_Sao-Carlos.png", "IFSP - São Carlos"],
]

function Organizers(){
    return (
        <div id="organizers" className="organizers">
            <h1 className="texto">Realização</h1>

            <div className="eachOrganizer">
            
            {logos2.map((patrocinador, index) => (
                <Organizer key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Organizers;
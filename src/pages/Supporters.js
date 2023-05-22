import Supporter from "../components/Supporter";
import "../style/pages/Supporters.css";

const logos = [
    ["http://via.placeholder.com/640x360", "Patrocinador1"],
    ["http://via.placeholder.com/100x50", "Patrocinador2"],
    ["http://via.placeholder.com/300x300", "Patrocinador3"],
    ["http://via.placeholder.com/400x200", "Patrocinador4"],
    ["http://via.placeholder.com/200x400", "Patrocinador5"],
    ]

const logos2 = [
    ["https://iamfounder.com.br/images/logo-onovolab.png", "Onovolab"],
    ["http://pet_ads.paginas.scl.ifsp.edu.br/assets/logo_PET.svg", "PET/ADS"],
    ["https://portais.ifsp.edu.br/scl/images/Logo_Campus/Marca_IFSP_2015_Sao-Carlos.png", "IFSP - São Carlos"],
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
            <h1 className="texto">Realização</h1>
            <div className="patrocinadores">

           
            {logos2.map((patrocinador, index) => (
                <Supporter key={index} patrocinador={patrocinador} />
                ))}
            </div>
        </div>
    )
}

export default Supporters

import "../style/pages/Organizers.css";
import Button from "../components/Button";
import Organizer from "../components/Organizer";
import logos from "../JSONs/Organizers.json";

function Organizers(){
    return (
        <div id="organizers" className="organizers">
            <h1 className="texto">Realização</h1>

            <div className="eachOrganizer">
            
            {logos.map((index) => (
                <Organizer key={index.id} organizer={index} />
                ))}
            </div>
        </div>
    )
}

export default Organizers;
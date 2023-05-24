import "../style/pages/Organizers.css";
import Button from "../components/Button";
import Organizer from "../components/Organizer";
import logos from "../JSONs/logos.json";

function Organizers(){
    return (
        <div id="organizers" className="organizers">
            <h1 className="texto">Realização</h1>
            <div className="eachOrganizer">
                {logos.supporters.map((logo) => (
                    <Organizer key={logo.id} organizer={logo} />
                    ))
                }
            </div>

            <h1 className="texto">Realização</h1>
            <div className="eachOrganizer">
                {logos.organizers.map((logo) => (
                    <Organizer key={logo.id} organizer={logo} />
                    ))
                }
            </div>
        </div>
    )
}

export default Organizers;
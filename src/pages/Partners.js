import "../style/pages/Partners.css";
import Button from "../components/Button";
import Partner from "../components/Partner";
import logos from "../JSONs/logos.json";
import GroupOfPartners from "../components/GroupOfPartners";

function Organizers(){
    return (
        <div id="organizers" className="partners">
            <GroupOfPartners logos={logos.supporters} text="Apoiadores"/>
            <GroupOfPartners logos={logos.organizers} text="Realizadores"/>
        </div>
    )
}

export default Organizers;
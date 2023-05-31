import "../style/pages/Partners.css";
import Button from "../components/Button";
import Partner from "../components/Partner";
import logos from "../JSONs/partners.json";
import GroupOfPartners from "../components/GroupOfPartners";

function Partners(){
    return (
        <div id="organizers" className="partners">
            <div className="partnersTile">
            <GroupOfPartners logos={logos.supporters} text="Apoiadores"/>
            <GroupOfPartners logos={logos.organizers} text="Realizadores"/>
            </div>
        </div>
    )
}

export default Partners;
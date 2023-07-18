import Partner from "../components/Partner";
import "../style/components/GroupOfPartners.css";

function GroupOfPartners({partners, text, isLandscape}){

    return (
        <>
            <div className="partnersTitleContainer">
                <h1 className="partnersTitle">{text}</h1>
            </div>
            <div className="groupOfPartners">
                {partners.map((partner) => (
                    <Partner key={partner.id} partner={partner} image={partner.src} isLandscape={isLandscape}/>
                    ))
                }
            </div>
        </>
    )
}

export default GroupOfPartners;
        
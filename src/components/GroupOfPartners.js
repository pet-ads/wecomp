import Partner from "../components/Partner";
import "../style/components/GroupOfPartners.css";

function GroupOfPartners({partners, text}){

    return (
        <>
            <div className="partnersTitleContainer">
                <h1 className="partnersTitle">{text}</h1>
            </div>
            <div className="groupOfPartners">
                {partners.map((partner) => (
                    <Partner key={partner.id} partner={partner} image={partner.src}/>
                    ))
                }
            </div>
        </>
    )
}

export default GroupOfPartners;
        
import Partner from "../components/Partner";
import "../style/components/GroupOfPartners.css";

function GroupOfPartners({partners, text}){

    return (
        <>
            <h1 className="partnersTitle">{text}</h1>
            <div className="groupOfPartners">
                {partners.map((partner) => (
                    <Partner key={partner.id} organizer={partner} image={partner.src}/>
                    ))
                }
            </div>
        </>
    )
}

export default GroupOfPartners;
        
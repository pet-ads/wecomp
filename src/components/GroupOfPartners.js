import Partner from "../components/Partner";
import "../style/components/GroupOfPartners.css";

function GroupOfPartners({logos, text}){

    return (
        <>
            <h1 className="partnersTitle">{text}</h1>
            <div className="groupOfPartners">
                {logos.map((logo) => (
                    <Partner key={logo.id} organizer={logo} />
                    ))
                }
            </div>
        </>
    )
}

export default GroupOfPartners;
        
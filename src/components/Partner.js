import styles from "../style/components/Partner.css"

function Partner({partner, image, isLandscape}){
    return(
        <div className="container">
            <div className={`partnerImage ${isLandscape ? "partner-image-landscape" : ""}`}>
                <a href={partner.link} target="_blank">
                    <img src={image} alt={partner.name} width={partner.width}></img>
                </a>
            </div>
        </div>
    )
}

export default Partner;
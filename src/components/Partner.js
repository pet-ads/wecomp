import styles from "../style/components/Partner.css"

function Partner({partner, image}){
    return(
        <div className="container">
            <div className="partnerImage">
                <a href={partner.link} target="_blank">
                    <img src={image} alt={partner.name} width={partner.width}></img>
                </a>
            </div>
        </div>
    )
}

export default Partner;
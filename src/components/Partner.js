import styles from "../style/components/Partner.css"

function Partner({organizer, image}){
    return(
        <div className="container">
            <div className="partnerImage">
                <a href={organizer.link} target="_blank">
                    <img src={image} alt={organizer.name}></img>
                </a>
            </div>
        </div>
    )
}

export default Partner;
import styles from "../style/components/Partner.css"
import logo from "../JSONs/logos.json"
function Organizer({organizer}){
    let image = organizer.src;
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

export default Organizer;
import styles from "../style/components/Organizer.css"
import logo from "../JSONs/logos.json"
function Organizer({organizer}){
    let image = organizer.src;
    return(
        <div className="container">
            <div className="organizerImage"> 
                <a href={organizer.link} target="_blank">
                    <img src={image} alt={organizer.name}></img>
                </a>
            </div>
            {/* <h3 className="organizerText">{organizer.name}</h3> */}
        </div>
    )
}

export default Organizer;
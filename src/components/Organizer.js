import styles from "../style/components/Organizer.css"
function Organizer({organizer}){
    return(
        <div className="container">
            <div className="organizerImage"> 
                <img src={organizer.src} alt={organizer.name}></img>
            </div>
            <h3 className="organizerText">{organizer.name}</h3>
        </div>
    )
}

export default Organizer;

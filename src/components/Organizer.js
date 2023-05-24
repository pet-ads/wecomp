import styles from "../style/components/Organizer.css"
function Organizer({organizer}){
    return(
        <div className="container">
            <div className="organizerImage"> 
                <a href={organizer.link} target="_blank">
                    <img src={organizer.src} alt={organizer.name}></img>
                </a>
            </div>
            <h3 className="organizerText">{organizer.name}</h3>
        </div>
    )
}

export default Organizer;
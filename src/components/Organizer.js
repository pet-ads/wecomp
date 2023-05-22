import styles from "../style/components/Organizer.css"
function Organizer({organizer}){
    return(
        <div className="container">
            <div className="organizerImage"> 
                <img src={organizer[0]}></img>
            </div>
            <h3 className="organizerText">{organizer[1]}</h3>
        </div>
    )
}

export default Organizer;

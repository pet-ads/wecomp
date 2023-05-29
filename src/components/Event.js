import "../style/components/Event.css";
import PopUpEvent from "./PopUpEvent";

function Event({event}){
    	return (
            <div className="event">
                <h2 className="eventTitle">{event.name}</h2>
                <img className="eventImage" src={event.image} alt={event.imageDesc}/>
                <h3 className="eventAuthor">{event.author}</h3>
                <p className="eventDate">{event.date}</p>
                <PopUpEvent name={event.name} author={event.author} date={event.date} description={event.description}/>
            </div>
        );
}

export default Event;

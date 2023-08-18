import "../style/components/Event.css";
import PopUpEvent from "./PopUpEvent";
import ClassificationLevel from "./ClassificationLevel";
import soldOut from '../images/soldOut.png';

function Event({event}){
    	return (
            <div className="event">
                <h2 className="eventTitle">{event.name}</h2>
                <div className="eventBanner">
                    <img className="eventImage" src={event.image} alt={event.imageDesc}/>
                    {event.soldOut ? <img className="sold-out" src={soldOut} alt="teste"/> : <></>}
                    {event.classification != undefined ? <ClassificationLevel classification={event.classification}/> : <></>}
                </div>

                <h3 className="eventAuthor">{event.author}</h3>
                <div className="eventDateTime">
                    <p className="eventDate">{event.date}</p>
                    <p className="eventTime">{event.time}</p>
                </div>
                <PopUpEvent event={event}/>
            </div>
        );
}

export default Event;
import Event from "../components/Event";
import "../style/components/GroupOfEvents.css";

function GroupOfEvents({events}){
    return(
        <div className="groupOfEvents">
            {events.map((eachEvent) => (
                <Event key={eachEvent.id} event={eachEvent} />
                ))
            }
        </div>
        );
}

export default GroupOfEvents;
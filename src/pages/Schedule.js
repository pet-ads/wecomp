import GroupOfEvents from "../components/GroupOfEvents";
import events from "../JSONs/events.json";

function Schedule(){
    return (
        <div id="schedule" className="schedule">
            <GroupOfEvents events={events.listOfEvents}/>
        </div>
    )
}

export default Schedule;
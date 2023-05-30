import "../style/pages/Schedule.css";
import GroupOfEvents from "../components/GroupOfEvents";
import events from "../JSONs/events.json";

function Schedule(){
    return (
        <div id="schedule" className="schedule">
            <h2 className="scheduleTitle">Programação</h2>
            <p>Divulgaremos em breve!</p>
            <GroupOfEvents events={events.listOfEvents}/>
        </div>
    )
}

export default Schedule;
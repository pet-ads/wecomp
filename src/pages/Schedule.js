import "../style/pages/Schedule.css";
import events from "../JSONs/events.json";
import Carousel from "../components/Carousel";
import Event from "../components/Event";

function Schedule(){
    return (
        <div id="schedule" className="schedule">
            <h2 className="scheduleTitle">Programação</h2>
            <Carousel>{
                events.listOfEvents.map((event) => (
                    <Event key={event.id} event={event} />
                ))
            }</Carousel>
        </div>
    )
}

export default Schedule;
import Event from "../components/Event";
import "../style/components/GroupOfEvents.css";
import Carousel from "./Carousel";

function GroupOfEvents({events}){
    return(
        <div className="groupOfEvents">
            <Carousel>{
                events.map((eachEvent) => (
                    <Event key={eachEvent.id} event={eachEvent} />
                ))
            }</Carousel>
        </div>
        );
}

export default GroupOfEvents;
import Event from "../components/Event";

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
import "../style/components/EventStatus.css";

function EventStatus({status}){
    let status_color
        switch(status){
            case "ESGOTOU!": status_color = "#CD2C2C"
            break;
            case "ÚLTIMAS VAGAS!": status_color = "#FF9900"
            break;
        }
    return(
        <div className="event-status" style={{"background-color" : status_color}}>
            <p>{status}</p>
        </div>
    )
}
export default EventStatus;
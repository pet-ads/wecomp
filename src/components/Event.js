function Event({event}){
    	return (
            <div className="event">
                <h2 className="eventTitle">{event.description}</h2>
                <img className="eventImage" src={event.image} alt={event.imageDesc}/>
                <h3 className="eventAuthor">{event.author}</h3>
                <p className="eventDate">{event.date}</p>
            </div>
        );
}

export default Event;

/*description, image, imageDesc, author, date*/
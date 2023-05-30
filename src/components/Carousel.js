import Button from "./Button.js";
import Event from "../components/Event";
import '../style/components/Carousel.css';

function Carousel({events}){
    return (
        <div className="container">
            <Button className="btn-gallery" text="<"/>
            <Button className="btn-gallery" text=">"/>
            <div className="gallery-wrapper">
                <div className="gallery">
                    {events.map((eachEvent) => (
                    <Event className="currentItem" key={eachEvent.id} event={eachEvent} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Carousel;
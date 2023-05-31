import LocationFrame from '../components/LocationFrame';
import '../style/pages/Location.css';


function Location(){
    return (
        <div id="local" className="local">
            <h1 className='title'>Local</h1>
            <LocationFrame />
        </div>
    )
}

export default Location;
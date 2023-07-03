import '../style/components/LocationFrame.css';

function LocationFrame({name, address, src}){

   
    return (
            <div className="locationFrame">
                    <h3>{name}</h3>
                    <p>{address}</p>
                    <iframe src={src}></iframe>
            </div>
        
    )
}

export default LocationFrame;
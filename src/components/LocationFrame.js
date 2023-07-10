import '../style/components/LocationFrame.css';

function LocationFrame({name, address, src}){

   
    return (
            <div className="locationFrame">
                    <div>
                        <h3>{name}</h3>
                        <p>{address}</p>
                    </div>
                    <iframe src={src}></iframe>
            </div>
        
    )
}

export default LocationFrame;
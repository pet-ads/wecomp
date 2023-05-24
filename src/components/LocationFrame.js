import '../style/components/LocationFrame.css';

function LocationFrame(){
    return (
        <div className="locationFrame">
            <h2>Onovolab</h2>
            <p>Rua Aquibadan, 1 - Centro</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.6643558698506!2d-47.896929323746434!3d-22.02416800692639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773d06b8be6d%3A0x8fc2b322136f2e37!2sONOVOLAB%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1684889501351!5m2!1spt-BR!2sbr"></iframe>
        </div>
    )
}

export default LocationFrame;
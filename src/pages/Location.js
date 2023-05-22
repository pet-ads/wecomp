import '../style/pages/Location.css';

function Location(){
    return (
        <div id="local" className="local">
            <h2 className='title'>Local</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462.3326691290693!2d-47.894341!3d-22.024283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773d06b8be6d%3A0x8fc2b322136f2e37!2sONOVOLAB%20S%C3%A3o%20Carlos!5e0!3m2!1spt-PT!2sbr!4v1684725100635!5m2!1spt-PT!2sbr" width="300" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
    )
}

export default Location;
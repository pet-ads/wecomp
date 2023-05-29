import '../style/components/Navbar.css';

function Navbar(){
    return (
        <nav className="nav-bar">
            <ul>
                <li><a className="navBanner" href="#banner">Início</a></li>
                <li><a className="navAbout" href="#about-the-event">Sobre</a></li>
                <li><a className="navSchedule" href="#">Cronograma</a></li>
                <li><a className="navSupports" href="#organizers">Parceiros</a></li>
                <li><a className="navLocation" href="#local">Local</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
import '../style/components/Navbar.css';

function Navbar(){
    return (
        <nav className="nav-bar">
            <ul>
                <li><a href="#banner">Início</a></li>
                <li><a href="#about-the-event">Sobre</a></li>
                <li><a href="#organizers">Apoio</a></li>
                <li><a href="#patrocinios">Cronograma</a></li>
                <li><a href="#local">Local</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
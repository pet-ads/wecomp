import '../style/components/Navbar.css';

function Navbar(){
    return (
        <nav className="nav-bar">
            <ul>
                <li><a href="./">Início</a></li>
                <li><a href="#about-the-event">Sobre</a></li>
                <li><a href="#patrocinios">Patrocinadores</a></li>
                <li><a href="./">Local</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
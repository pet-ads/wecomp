import "../style/components/Header.css";
import Navbar from './Navbar';

function Header({isLandscape}){
    return (
        <header className={`header ${isLandscape ? "header-landscape" : ""}`} id="navbar">
            <Navbar/>
        </header>
    )
}

export default Header;
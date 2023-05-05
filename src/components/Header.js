import "../style/components/Header.css";

import Navbar from './Navbar';

function Header(){
    return (
        <header className="header">
            <img className="logo" src="https://via.placeholder.com/48x48" alt="Logo da Wecomp"/>
            <Navbar/>
        </header>
    )
}

export default Header;
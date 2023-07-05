import "../style/components/DropdownMenu.css";
import menu from '../images/menu.png';
import React, { useEffect, useState, useRef } from "react";

function DropdownMenu () {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="menu" onMouseLeave={handleMouseLeave}>
            <div className="dropdown" ref={dropdownRef} >
                <div className="menu-image">
                    <img src={menu} onClick={toggleDropdown} ></img>
                </div>
                {isDropdownOpen && (
                <div className="dropdown-content" onMouseLeave={handleMouseLeave}>
                    <a href="#banner">Início</a>
                    <a href="#about-the-event">Sobre</a>
                    <a href="#schedule">Programação</a>
                    <a href="#organizers">Parceiros</a>
                    <a href="#contact">Contato</a>
                    <a href="#local">Local</a>
                </div>
                )}
            </div>
        </div>

    )

}

export default DropdownMenu;

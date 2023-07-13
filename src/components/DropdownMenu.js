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
                    <a href="#banner" onClick={toggleDropdown}>Início</a>
                    <a href="#about-the-event" onClick={toggleDropdown}>Sobre</a>
                    <a href="#schedule" onClick={toggleDropdown}>Programação</a>
                    <a href="#organizers" onClick={toggleDropdown}>Parceiros</a>
                    <a href="#contact" onClick={toggleDropdown}>Contato</a>
                    <a href="#local" onClick={toggleDropdown}>Local</a>
                </div>
                )}
            </div>
        </div>

    )

}

export default DropdownMenu;

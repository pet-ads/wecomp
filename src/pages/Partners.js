import "../style/pages/Partners.css";
import GroupOfPartners from "../components/GroupOfPartners";
import React, { useState, useEffect } from 'react';

function Partners({isLandscape}){

    const [supporters, setSupporters] = useState([]);
    const [organizers, setOrganizers] = useState([]);
    
    useEffect(() => {
        const fetchPartners = async () => {
        try {
            const response = await fetch("./partners.json");
            const data = await response.json();
            setSupporters(data.supporters);
            setOrganizers(data.organizers);
        } catch (error) {
            console.error('Ocorreu um erro ao obter os integrantes:', error);
        }
        };

        fetchPartners();
    }, []);

    return (
        <div id="organizers" className={'partners ${isLandscape ? "partners-landscape" : ""}'}>
            <div className="partnersTile">
            <GroupOfPartners partners={supporters} text="Apoiadores" isLandscape={isLandscape}/>
            <GroupOfPartners partners={organizers} text="Realização" isLandscape={isLandscape} />
            </div>
        </div>
    )
}

export default Partners;
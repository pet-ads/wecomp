import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Button from "./Button.js";
import Event from "./Event.js";
import events from "../JSONs/events.json";

import ClassificationBadge from "./ClassificationBadge";
import "../style/components/PopUpEvent.css";


function PopUpEvent({name, author, date, description, classification}) {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className='popUp'>
        <Button text='Descrição' action={() => setIsOpen(true)}/>

        <ReactModal className="popUpTeste" overlayClassName="popUpOverlay"
            isOpen={isOpen}
            contentLabel="Example Modal">
            <div className='popUpDescription'>
                <div className="badge-line">
                  <ClassificationBadge classification={classification}/>
                  <h2>{name}</h2>
                </div>
                <h3>{author}</h3>
                <p>{date}</p>
                <p>{description}</p>
                <Button text='Fechar' action={() => setIsOpen(false)}/>
            </div>
        </ReactModal>
    </div>
  );
}
 
export default PopUpEvent;
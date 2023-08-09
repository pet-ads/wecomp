import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Button from "./Button.js";
// import popUpEventTab from "./PopUpEventTab.js";

import ClassificationBadge from "./ClassificationBadge";
import "../style/components/PopUpEvent.css";


function PopUpEvent({event}) {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className='popUp'>
        <Button text='Descrição' action={() => setIsOpen(true)}/>
        <ReactModal className="popUpTeste" overlayClassName="popUpOverlay"
            isOpen={isOpen}
            contentLabel="Example Modal">
            <div className='popUpDescription'>
                <h2 className='modalTitle'>{event.subTitle ?  (event.name + " - " + event.subTitle) : (event.name)}</h2>
                <h3>{event.author}</h3>
                <p>{event.date} | {event.time}</p>

                {/* <popUpEventTab text1="Descrição" text2="Bio"/> */}
                <p className='description-container'>{event.description}</p>

                {event.vacancies ? <p>Quantidade de vagas: {event.vacancies}</p> : <></>}
                <div className="badge-line">
                  {event.classification ? <p>Dificuldade:</p> : <></>}
                  <ClassificationBadge classification={event.classification}/>
                </div>
                <Button text='Fechar' action={() => setIsOpen(false)}/>
            </div>
        </ReactModal>
    </div>
  );
}
 
export default PopUpEvent;
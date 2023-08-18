import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Button from "./Button.js";
// import popUpEventTab from "./PopUpEventTab.js";

import ClassificationBadge from "./ClassificationBadge";
import "../style/components/PopUpEvent.css";
import PopUpEventTab from './PopUpEventTab.js';


function PopUpEvent({event}) {
  const [isOpen, setIsOpen] = useState(false);
 
  const registrationPeriodActive = true;

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
                {event.bio ? 
                <PopUpEventTab texts={["Descrição", "Bio"]} descriptions={[event.description, event.bio]}/>
                : <PopUpEventTab texts={["Descrição"]} descriptions={[event.description]}/>
                }
                {event.vacancies ? <p>Quantidade de vagas: {event.vacancies}</p> : <></>}
                <div className="badge-line">
                  {event.classification ? <p>Dificuldade:</p> : <></>}
                  <ClassificationBadge classification={event.classification}/>
                </div>
                <p className='location'>Local: {event.location}</p>
                {event.link ? 
                  <div className="inline">
                    <Button text='Inscreva-se' address={event.link} active={event.active && registrationPeriodActive}/> 
                    <Button text='Fechar' action={() => setIsOpen(false)}/>
                  </div>
                  :
                  <Button text='Fechar' action={() => setIsOpen(false)}/>
                }
            </div>
        </ReactModal>
    </div>
  );
}
 
export default PopUpEvent;
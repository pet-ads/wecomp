import { useState } from "react";
import Tab from "./Tab";
import "../style/components/PopUpEventTab.css";

function PopUpEventTab({ texts, descriptions }) {
  const [text, setText] = useState(descriptions[0]);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (newDescription, index) => {
    setText(newDescription);
    setSelectedTab(index);
  };
  
  const numberOfTabs = texts.length

  return (
    <div className="popUpEventTab">
      <div className="tabs">
        {texts.map((text, index) => (
          <Tab
            numberOfTabs={numberOfTabs}
            key={index}
            text={text}
            onClick={() => handleTabClick(descriptions[index], index)}
            isSelected={selectedTab === index}
          />
        ))}
      </div>
      <div className="description-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PopUpEventTab;
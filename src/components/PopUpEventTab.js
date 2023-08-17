import { useState } from "react"
import Tab from "./Tab"
import "../style/components/PopUpEventTab.css"

function PopUpEventTab({text1, text2, description1, description2 }){
    const [text, setText] = useState(description1)
    
    const handleTabClick = (newDescription) => {
        setText(newDescription);
      };

    return(
        <div className="popUpEventTab">
            <div className="tabs">
                <Tab text={text1} onClick={() => handleTabClick(description1)}/>
                <Tab text={text2} onClick={() => handleTabClick(description2)}/>
            </div>
            <p>{text}</p>
        </div>

    )
}

export default PopUpEventTab
import { useState } from "react"
import Tab from "./Tab"
import "../style/components/PopUpEventTab.css"

function PopUpEventTab({text1, text2}){
    const [text, setText] = useState(text1)
    


    return(
        <div className="popUpEventTab">
            <div>
                <Tab text={text1}/>
                <Tab text={text2}/>
                <p>{text}</p>
            </div>
            <p>{text}</p>
        </div>

    )
}

export default PopUpEventTab
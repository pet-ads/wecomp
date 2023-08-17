import "../style/components/Tab.css";

function Tab({text, onClick}){
    return(
        <p className="tab" onClick={onClick}>{text}</p>
    )
}


export default Tab
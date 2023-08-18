import "../style/components/Tab.css";

function Tab({ text, onClick, isSelected, numberOfTabs }) {
    return(
        <p className={isSelected ? 'tab selected' : 'tab not-selected'} style={{width: `${100 / numberOfTabs}%`}} onClick={onClick}>{text}</p>
    )
}


export default Tab
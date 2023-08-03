import "../style/components/EventClassification.css";

function DifficultyLevel({classification}){
    let classificacao
        switch(classification){
            case "livre": classificacao = "Livre"
            break;
            case "basico": classificacao = "Básico"
            break;
            case "intermediario": classificacao = "Intermediário"
            break;
            case "avancado": classificacao = "Avançado"
            break;
            default: classificacao = classification
            break;
        }
    return(
        <div className="eventClassification">
            <p className={classification}>{classificacao}</p>
        </div>
        // <img className="eventClassification" src="./events/classification/livre.png" alt="classificação livre"/>
    )
    
}


export default DifficultyLevel;
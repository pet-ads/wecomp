import "../style/components/ClassificationBadge.css";


function ClassificationBadge({classification}){

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
            default: 
                return(
                    <></>
                )
        }
    return(
        <div className={"badge-" + classification + " badge"}>
            <p>{classificacao}</p>
        </div>
    )
}

export default ClassificationBadge
import '../style/components/LocationFrame.css';

function LocationFrame(){
    return (
        <div className="locations">
            <div className="locationFrame">

                    <img className="locationIcon" src="https://iamfounder.com.br/images/logo-onovolab.png" alt="Logo do Onovolab"></img>
                    <h2>Onovolab</h2>
                    <p>Rua Aquibadan, 1 - Centro</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.6643558698506!2d-47.896929323746434!3d-22.02416800692639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773d06b8be6d%3A0x8fc2b322136f2e37!2sONOVOLAB%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1684889501351!5m2!1spt-BR!2sbr"></iframe>
            </div>
            <div className="locationFrame">
                    <img className="locationIcon" src="https://portais.ifsp.edu.br/scl/images/Logo_Campus/Marca_IFSP_2015_Sao-Carlos.png" alt="Logo do IFSP"></img>
                    <h2>IFSP São Carlos</h2>
                    <p>Estrada Municipal Paulo Eduardo de Almeida</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1100.0366774959741!2d-47.8786689801622!3d-21.97036865369336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8711e71fe250f%3A0xf5c8879e76e658c4!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1685573374949!5m2!1spt-BR!2sbr"></iframe>
            </div>
            
        </div>
        
    )
}

export default LocationFrame;

/* <img class="locationIcon" src="https://portais.ifsp.edu.br/scl/images/Logo_Campus/Marca_IFSP_2015_Sao-Carlos.png" alt="Logo do IFSP"></img> */
/* <img class="locationIcon" src="https://iamfounder.com.br/images/logo-onovolab.png" alt="Logo do Onovolab"></img> */
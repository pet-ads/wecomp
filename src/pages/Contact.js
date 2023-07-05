import '../style/pages/Contact.css';
import Button from '../components/Button.js';
import ClickableImage from '../components/ClickableImage';

function Contact(){
    const linkInstagram = "https://www.instagram.com/wecompifsp/";
    const logoInstagram = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
    
    const linkEmail = "mailto:wecomp.scl@ifsp.edu.br?subject=Contato via Site da Wecomp";
    const logoEmail = "https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png";
    
    const linkFacebook = "https://web.facebook.com/wecompifsp";
    const logoFacebook = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"; 

    return(
        <div className="contact" id="contact">
            <h2>Contato</h2>
            <p>Nos acompanhe pelas nossas redes sociais, onde postaremos as atualizações do evento.
                Entre em contato conosco pelo nosso e-mail oficial!</p>
            <h3>Redes Sociais</h3>
            <div className="socialMedia">
                <div>
                    <ClickableImage className={"socialMediaLogo"} link={linkInstagram} alt="Logo da Rede Social Instagram" 
                    text="@wecompifsp" image={logoInstagram}></ClickableImage>
                </div>
                <div>
                    <ClickableImage className={"socialMediaLogo"} link={linkFacebook} alt="Logo da Rede Social Facebook" 
                    text="@wecompifsp" image={logoFacebook}></ClickableImage>
                </div>
            </div>
            
            <div className="email">
                <h3>E-mail</h3>
                <p>wecomp.scl@ifsp.edu.br</p>
                <Button className="buttonEmail" text='Envie um e-mail' address='mailto:wecomp.scl@ifsp.edu.br?subject=Contato via Site da Wecomp'/>
            </div>
        </div>
    );
}

export default Contact;

/*
<div>
    <p>E-mail da Wecomp</p>
    <a href={linkEmail} target="_blank">
        <img className="socialMediaLogo" src={logoEmail} alt="Logo de E-mail"></img>
    </a>
</div>
    */
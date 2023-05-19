import '../style/components/Footer.css';
import logoIFSP from '../images/ifsp.png';

function Footer(){
    return (
        <footer className="footer">
            <p>Desenvolvido com ♥ pela equipe do PET 
                do curso de Análise e Desenvolvimento de Sistemas</p>
            <img className="logoIF" src={logoIFSP} alt="Logo do IFSP"/>
        </footer>
    )
}

export default Footer;
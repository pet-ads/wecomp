import '../style/components/Footer.css';
import logoIFSPbranco from '../images/logoIFSPbranco.png';

function Footer(){
    return (
        <footer className="footer">
            <p>Desenvolvido com ♥ pela equipe do PET 
                do curso de Análise e Desenvolvimento de Sistemas</p>
            <img className="logoIF" src={logoIFSPbranco} alt="Logo do IFSP"/>
        </footer>
    )
}

export default Footer;
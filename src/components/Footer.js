import '../style/components/Footer.css';
import logoGithubBranco from '../images/github-mark-white.png';

function Footer(){
    return (
        <footer id="footer" className="footer">
            <a href="https://github.com/pet-ads/wecomp">
                <img className="logoGithub" src={logoGithubBranco} alt="Logo do Github"/>
            </a>
            <p>Desenvolvido com ♥ pela equipe do PET 
                do curso de Análise e Desenvolvimento de Sistemas</p>
        </footer>
    )
}

export default Footer;
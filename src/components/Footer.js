import '../style/components/Footer.css';
import logoGithubBranco from '../images/github-mark-white.png';
import logoIfspBranco from '../images/logoIFSPbranco.png';

function Footer(){
    return (
        <footer id="footer" className="footer">
            <a href="https://github.com/pet-ads/wecomp">
                <img className="logoGithub" src={logoGithubBranco} alt="Logo do Github"/>
            </a>
            <p className="footer_text">Desenvolvido com ♥ por PET/ADS @ IFSP/SCL</p>
            <img className='logoIfsp ' src={logoIfspBranco} alt="logo do IFSP"></img>
        </footer>
    )
}

export default Footer;
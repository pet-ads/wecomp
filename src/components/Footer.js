import '../style/components/Footer.css';
import logoGithubBranco from '../images/github-mark-white.png';
import logoIfspBranco from '../images/logoIFSPbranco.png';

function Footer({isLandscape}) {
    return (
        <footer id="footer" className={`footer ${isLandscape ? "footer-landscape" : ""}`}>
            <div>
                <a href="https://github.com/pet-ads/wecomp" target="_blank">
                    <img className="logoGithub" src={logoGithubBranco} alt="Logo do Github"/>
                </a>
                <a href="http://petads.paginas.scl.ifsp.edu.br/src/pages/home/index.html"  target="_blank">
                    <p className="footer_text">Desenvolvido com ♥ por PET/ADS @ IFSP/SCL</p>
                </a>
                <a href="https://portais.ifsp.edu.br/scl/"  target="_blank">
                    <img className='logoIfsp ' src={logoIfspBranco} alt="logo do IFSP"></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
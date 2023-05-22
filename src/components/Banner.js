import '../style/components/Banner.css';
import logoWecomp from '../images/logoCerto.png';
import logoIFSP from '../images/ifsp.png';

function Banner({ bannerImage, canvasBackgroundColor, children }) {
    return (
        <div id="banner" className="banner">
            <img className="banner--image" src={logoWecomp}></img>
            <h2 className="title">IV Semana da Computação</h2>
            <p className="text">Em breve!</p>
        </div> 
    );
}

/*<img className="logoIFSP" src={logoIFSP}></img>*/

export default Banner;

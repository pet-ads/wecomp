import '../style/components/Banner.css';
import logoWecomp from '../images/logoCerto.png';

function Banner({ bannerImage, canvasBackgroundColor, children }) {
    return (
        <div id="banner" className="banner">
            <img className="banner--image" src={logoWecomp}></img>
            <h2 className="title">IV Semana da Computação</h2>
            <p className="text">28 de agosto a 01 de setembro</p>
        </div> 
    );
}

/*<img className="logoIFSP" src={logoIFSP}></img>*/

export default Banner;
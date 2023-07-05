import '../style/components/Banner.css';
import logoWecomp from '../images/logoCerto.png';

function Banner({ bannerImage, canvasBackgroundColor, children }) {
    return (
        <div id="banner" className="banner">
            <div className="banner-container">
                <img className="banner--image" src={logoWecomp}></img>
                <h2 className="banner-title">IV Semana da Computação</h2>
                <p className="banner-text">28 de agosto a 01 de setembro</p>
            </div>
        </div> 
    );
}

/*<img className="logoIFSP" src={logoIFSP}></img>*/

export default Banner;
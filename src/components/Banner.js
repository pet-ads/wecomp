import '../style/components/Banner.css';
import logoWecomp from '../images/logoCerto.png';
import logoIFSP from '../images/ifsp.png';

function Banner({ bannerImage, canvasBackgroundColor, children }) {
    return (
        <div className="banner">
            <img className="banner--image" src={logoWecomp}></img>
            <h2 className="title">IV Semana da Computação</h2>
            <p className="text">10 a 15 de Agosto de 2023</p>
            <img className="logoIFSP" src={logoIFSP}></img>
        </div> 
    );
}

export default Banner;

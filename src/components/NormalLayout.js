import '../style/components/Parallax.css';
import Banner from "./Banner";
import AboutTheEvent from "../pages/AboutTheEvent";
import Schedule from "../pages/Schedule";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import Location from "../pages/Location";
import Footer from "./Footer";
import Background from "./Background";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";


function NormalLayout({isLandscape}){
    return (
        <>
            <Header isLandscape={isLandscape}/>

            <DropdownMenu/>
            <div className="scroll-container parallax">
                <Background isLandscape={isLandscape}/>
                <div className="parallax_layer_base parallax__layer">
                    <Banner/>
                    <AboutTheEvent />
                    <Schedule/>
                    <Partners isLandscape={isLandscape}/>
                    <Contact isLandscape={isLandscape}/>
                    <Location isLandscape={isLandscape}/>
                    <Footer isLandscape={isLandscape}/>
                </div>
            </div>
        </>
    )
}

export default NormalLayout;
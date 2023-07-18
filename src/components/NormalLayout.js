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


function NormalLayout(){
    return (
        <>
            <Header/>

            <DropdownMenu/>
            <div className="scroll-container parallax">
                <Background/>
                <div className="parallax_layer_base parallax__layer">
                    <Banner/>
                    <AboutTheEvent />
                    <Schedule/>
                    <Partners/>
                    <Contact/>
                    <Location/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default NormalLayout;
import '../style/components/Parallax.css';
import Banner from "./Banner";
import AboutTheEvent from "../pages/AboutTheEvent";
import Schedule from "../pages/Schedule";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import Location from "../pages/Location";
import Footer from "./Footer";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";


function SafariLayout(){
    return (
        <>
            <Header/>

            <DropdownMenu/>
            <div className="parallax-safari">
                <div className="parallax-image-safari"/>
                <div className="main-content-safari">
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

export default SafariLayout;
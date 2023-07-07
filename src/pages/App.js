import '../style/pages/App.css';
import '../style/components/Parallax.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import Partners from './Partners';
import Contact from './Contact';
import Location from './Location';
import AboutTheEvent from './AboutTheEvent';
import Background from '../components/Background';
import Schedule from './Schedule';
import DropdownMenu from '../components/DropdownMenu';


function App() {
  return (
    <div className="app">
      <Header/>

      <DropdownMenu/>
      <div className="parallax">
        <div className="parallax-image">
            <div>
                <Banner/>
                <AboutTheEvent />
                <Schedule/>
                <Partners/>
                <Contact/>
                <Location/>
                <Footer/>
            </div>
        </div>
      </div>
    </div> 
  );
}

export default App;

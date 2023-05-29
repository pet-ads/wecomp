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


function App() {
  return (
    <div className="app">
      <Header/>
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
    </div> 
  );
}

export default App;

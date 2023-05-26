import '../style/pages/App.css';
import '../style/components/Parallax.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import Partners from './Partners';
import Location from './Location';
import AboutTheEvent from './AboutTheEvent';
import Background from '../components/Background';


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="scroll-container parallax">
        <Background/>
        <div className="parallax_layer_base parallax__layer">
          <Banner/>
          <AboutTheEvent />
          <Partners/>
          <Location/>
          <Footer/>
        </div>
      </div>
    </div> 
  );
}

export default App;

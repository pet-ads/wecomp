import '../style/pages/App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import Organizers from './Partners';
import Location from './Location';
import AboutTheEvent from './AboutTheEvent';


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="scroll-container">
        <Banner/>
        <AboutTheEvent />
        <Organizers/>
        <Location/>
        <Footer/>
      </div>
    </div> 
  );
}

export default App;

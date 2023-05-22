import '../style/pages/App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import Supporters from './Supporters';
import Organizers from './Organizers';
import Location from './Location';
import AboutTheEvent from './AboutTheEvent';


function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <AboutTheEvent />
      <Supporters/>
      <Organizers/>
      <Location/>
      <Footer/>
    </div> 
  );
}

export default App;

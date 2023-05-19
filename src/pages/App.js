import '../style/pages/App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import Supporters from './Supporters';
import Location from './Location';
import AboutTheEvent from './AboutTheEvent';

const logos = [
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png", "Lego"],
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png", "Lego"],
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png", "Lego"],
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png", "Lego"],
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png", "Lego"],
  
  ]

function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <AboutTheEvent />
      <Supporters imagens={logos}/>
      <Location/>
      <Footer/>
    </div> 
  );
}

export default App;

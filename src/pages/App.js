import '../style/pages/App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import Patrocinios from '../components/Patrocinios';

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

      <Banner 
        bannerImage="https://via.placeholder.com/1000x500" 
        canvasBackgroundColor="#868686">
        <h1>Wecomp</h1>
      </Banner>

      <main className="content">
        <AboutTheEvent />
        <Patrocinios imagens={logos}/>
      </main>
      <Footer/>
    </div> 
  );
}

export default App;

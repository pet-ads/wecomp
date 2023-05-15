import '../style/pages/App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';

import AboutTheEvent from './AboutTheEvent';

function App() {
  return (
    <div className="app">
      <Header/>

      <Banner bannerImage="https://via.placeholder.com/1000x500">
        <h1>Wecomp</h1>
      </Banner>

      <main className="content">
        <AboutTheEvent />
      </main>

      <Footer/>
    </div> 
  );
}

export default App;

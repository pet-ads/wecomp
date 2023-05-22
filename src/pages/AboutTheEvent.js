import '../style/pages/AboutTheEvent.css';
import Button from '../components/Button.js';

function AboutTheEvent() {
    return (
        <section id="about-the-event" className="about-the-event colored-section">
            <header>
                <h2>Sobre a Wecomp</h2>
            </header>
            <div className="section-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec felis lorem, vestibulum quis pretium eget, 
                    tincidunt eget dolor. Sed tristique a mi eget ullamcorper. 
                    In laoreet diam a posuere faucibus. Proin scelerisque 
                    finibus diam eget scelerisque. In pulvinar nisl nec 
                    consequat ullamcorper. Donec eget felis orci. Praesent 
                    sagittis ex a sollicitudin gravida. Sed nunc nibh, congue 
                    id nisi nec, pretium auctor enim. Suspendisse ut neque sit 
                    amet ex consequat sollicitudin vel sit amet urna. Phasellus 
                    ultricies nisl justo, dapibus gravida ipsum blandit vitae. 
                    Nam ex odio, egestas quis orci vel, consequat pellentesque 
                    dolor.
                </p>
            </div>
            <Button text='Veja mais' address='http://pet_ads.paginas.scl.ifsp.edu.br/src/pages/home/index.html'/>
        </section>
    );
}

export default AboutTheEvent;

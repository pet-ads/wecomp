import '../style/pages/AboutTheEvent.css';
import Button from '../components/Button.js';

function AboutTheEvent() {
    return (
        <section id="about-the-event" className="about-the-event colored-section">
            <header>
                <h2>Sobre a Wecomp</h2>
            </header>
            <div className="section-content">
                <p className='event-description'>
                    A Wecomp é a semana da computação do IFSP São Carlos, que neste ano realizará sua quarta edição. O objetivo do evento é proporcionar uma maior interação entre os estudantes, o mercado de tecnologia e a cidade de São Carlos. Ao longo de cinco dias de evento, serão realizados diversos minicursos, talks e processos seletivos, que visam reduzir a distância entre a teoria e a prática, ensinar tecnologias novas e promover o ingresso dos participantes no mercado de trabalho
                </p>
            </div>
            <Button text='Veja mais' address='http://pet_ads.paginas.scl.ifsp.edu.br/src/pages/home/index.html'/>
        </section>
    );
}

export default AboutTheEvent;

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
                    O principal objetivo da Semana da Computação é proporcionar aos alunos maior interação 
                    com o mercado e com aqueles que compartilham ideias e interesses semelhantes. 
                    Pretende-se reduzir a distância entre teoria e prática, ensinar tecnologias novas aos alunos,
                    guiá-los no âmbito empresarial da computação e promover seu ingresso no mercado de trabalho.
                </p>
            </div>
            <Button text='Veja mais' address='http://pet_ads.paginas.scl.ifsp.edu.br/src/pages/home/index.html'/>
        </section>
    );
}

export default AboutTheEvent;

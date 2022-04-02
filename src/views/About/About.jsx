import './About.css';
import FadeIn from 'react-fade-in';
import image1 from '../../assets/handshake.gif';
import image2 from '../../assets/header_blue.gif';

export default function About() {
  return (
    <div className="About">
      <FadeIn>
        <header className="about-name">MICHELLE NYGREN</header>
      </FadeIn>
      <FadeIn>
        <img
          src={image1}
          alt="A drawn image of two women shaking hands"
          className="about-image"
        />
      </FadeIn>
      <FadeIn>
        <div className="about-bio">
          <p className="about-bio_description">
            I am a hyper-focused <strong>full stack software engineer</strong>{' '}
            who is passionate about <strong>people</strong>. I create smart
            websites that center on <strong>user experience</strong>, utilizing{' '}
            <strong>clean code</strong> to build <strong>human-centered</strong>{' '}
            and <strong>empathetic</strong> tech. I am:
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="strengths">
          <div className="strengths-item">
            <p className="strengths-item_word">CURIOUS</p>
          </div>
          <div className="strengths-item">
            <p className="strengths-item_word">EMPATHETIC</p>
          </div>
          <div className="strengths-item">
            <p className="strengths-item_word">ADAPTABLE</p>
          </div>
          <div className="strengths-item">
            <p className="strengths-item_word">DRIVEN</p>
          </div>
          <div className="strengths-item">
            <p className="strengths-item_word">SMART</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

import './About.css';
import FadeIn from 'react-fade-in';
import image1 from '../../assets/handshake.gif';
import image2 from '../../assets/header_blue.gif';

export default function About() {
  return (
    <div className="about">
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
          <p>
            I am a hyper-focused <strong>full stack software engineer</strong>{' '}
            who is passionate about <strong>people</strong>. I create beautiful,
            accessible, empathetic web experiences that center on{' '}
            <strong>user experience</strong>, and embrace a{' '}
            <strong>growth mindset</strong> in all I do.
          </p>
          {/* <p>
            I am an <strong>intuitive</strong> problem solver, an{' '}
            <strong>engaging</strong> collaborator, and a{' '}
            <strong>meticulous</strong> developer.{' '}
          </p> */}
        </div>
      </FadeIn>

      {/* potential to bring in some strengths - styled with circles */}
      {/* <FadeIn>
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
      </FadeIn> */}
    </div>
  );
}

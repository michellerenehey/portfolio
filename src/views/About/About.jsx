import './About.css';
import image1 from '../../assets/header_orange.gif';
import image2 from '../../assets/header_blue.gif';

export default function About() {
  return (
    <div className="About">
      <img
        src={image2}
        alt="Michelle Nygren shaking hands"
        className="main-image"
      />
      <div className="bio">
        <p>
          I am a hyper-focused <strong>full stack software engineer</strong> who
          is passionate about <strong>people</strong>. I create smart websites
          that center on <strong>user experience</strong>, utilizing{' '}
          <strong>clean code</strong> to build <strong>human-centered</strong>{' '}
          and <strong>empathetic</strong> tech.
        </p>
      </div>
    </div>
  );
}

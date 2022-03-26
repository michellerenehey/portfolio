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
          I am a <strong>full stack software engineer</strong> who cares about{' '}
          <strong>people</strong>. Whether creating smart and beautiful apps
          that center on <strong>user experience</strong>, or focusing on{' '}
          <strong>human-centered</strong> projects, I like utilizing tech to
          create <strong>empathetic</strong> solutions.
        </p>
        {/* <p>
          I have a <strong>growth mindset</strong>, and thrive in environments
          that allow me to be <strong>curious</strong> and{' '}
          <strong>creative</strong>.
        </p> */}
      </div>
    </div>
  );
}

import './About.css';
import headshot from '../../assets/headshot.jpg';
import me from '../../assets/me.gif';
import Spotify from 'react-spotify-embed';

export default function About() {
  return (
    <div className="about">
      <img src={me} alt="Gif of Michelle dipping feet in water" />
      <div className="about-bio">
        <p>
          Hi! Thanks for visiting my little corner of the internet. I'm a
          software engineer in Portland, OR. Before building things on the
          internet, I was a digital marketer and a pastry chef. I’ve always
          loved making things and solving problems, and have always done so with{' '}
          <strong>people</strong> as my motivation.
        </p>
        <p>
          I decided to learn software development because I believed I could use
          technology to solve bigger, more human-centered problems.
        </p>
        <p>It's nice to see you!</p>
      </div>
      <div className="about-facts">
        <div className="fact">CURRENTLY READING</div>
        <div className="fact">
          CURRNTLY LISTENING
          <Spotify link="https://open.spotify.com/playlist/4sxXL9VpKH3oXB9Ll7YuPx?si=21915288d1454246" />
        </div>
        <div className="fact">CURRENTLY BUILDING</div>
      </div>
    </div>
  );
}

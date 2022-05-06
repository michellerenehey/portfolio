import './About.css';
import headshot from '../../assets/headshot.jpg';
import me from '../../assets/me.gif';
import shoe from '../../assets/running.png';

import Spotify from 'react-spotify-embed';

export default function About() {
  return (
    <div className="about">
      <img
        src={me}
        alt="Gif of Michelle dipping feet in water"
        className="about-pic"
      />
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
      <div className="facts-container">
        <div className="top-facts">
          <div className="top-fact">
            <h3>CURRENTLY TRAINING FOR...</h3>
            <img src={shoe} alt="Line drawing of shoe" />
            <p>40 mile trail run around Mt. Hood!</p>
          </div>
          <div className="top-fact">CURRENTLY LEARNING...</div>
          <div className="top-fact">CURRENTLY READING...</div>
        </div>
        <div className="bottom-facts">
          <div className="bottom-fact">
            <h3>CURRENTLY LISTENING TO...</h3>
            <div clasName="spotify">
              <Spotify link="https://open.spotify.com/playlist/4sxXL9VpKH3oXB9Ll7YuPx?si=21915288d1454246" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

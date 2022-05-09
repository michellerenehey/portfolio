import './About.css';
import Spotify from 'react-spotify-embed';
import FadeIn from 'react-fade-in';
import me from '../../assets/me.gif';
import shoe from '../../assets/running.png';
import reading from '../../assets/open_book.png';
import lightbulb from '../../assets/lightbulb.png';
import grid from '../../assets/grid.png';

export default function About() {
  return (
    <div className="about">
      <FadeIn>
        <div className="about-bio">
          <h1>Hello!</h1>
          <img
            src={me}
            alt="Gif of Michelle dipping feet in water"
            className="about-pic"
          />
          <p>
            Thanks for visiting my little corner of the internet. I'm a software
            engineer in the Pacific Northwest. Before building things on
            computers, I was a digital marketer and a pastry chef. I’ve always
            loved creating things and solving problems, and have always done so
            with 〰️ people 〰️ as my motivation.
          </p>
          <p>
            I decided to learn software development because I believed I could
            use technology to solve bigger, more human-centered problems. Bonus:
            it's really fun! I love building things here, and think we can build
            some really beautiful, impactful, accessible, powerful things
            together. So, let's!
          </p>
          <h3>&#x270C; It's nice to see you! &#x270C;</h3>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="facts-container">
          <div className="top-facts">
            <div
              className="top-fact"
              style={{ backgroundImage: `url(${grid})` }}
            >
              <h3>CURRENTLY READING...</h3>
              <img src={reading} alt="Line drawing of open book" />
              <p>The King Killer Chronicles by Patrick Rothfuss</p>
            </div>
            <div
              className="top-fact"
              style={{ backgroundImage: `url(${grid})` }}
            >
              <h3>CURRENTLY TRAINING FOR...</h3>
              <img src={shoe} alt="Line drawing of shoe" />
              <p>40 mile trail run around Mt. Hood!</p>
            </div>
            <div
              className="top-fact"
              style={{ backgroundImage: `url(${grid})` }}
            >
              <h3>CURRENTLY LEARNING...</h3>
              <img src={lightbulb} alt="Line drawing of lightbulb" />
              <p>Framer Motion, City-Cycling, Embroidery</p>
            </div>
          </div>
          <div className="bottom-facts">
            <div className="bottom-fact">
              <h3>CURRENTLY CODING TO...</h3>
              <div className="spotify">
                <Spotify link="https://open.spotify.com/playlist/4sxXL9VpKH3oXB9Ll7YuPx?si=21915288d1454246" />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

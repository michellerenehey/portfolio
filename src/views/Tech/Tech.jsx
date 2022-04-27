import './Tech.css';
import sparkle from '../../assets/sparkle.gif';
import FadeIn from 'react-fade-in';

export default function Tech() {
  return (
    <div className="tech">
      <img src={sparkle} alt="Gif of small sparkle" />
      <div className="tech-section">
        <FadeIn>
          <div className="tech-left">
            <div className="tech-languages tech-container">
              <h2 className="tech-header">Languages</h2>
              <p>JavaScript</p>
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <div className="tech-environments tech-container">
              <h2 className="tech-header">Frameworks &amp; Libraries</h2>
              <p>React</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>Redux</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="tech-center">
            <div className="tech-databases tech-container">
              <h2 className="tech-header">Database</h2>
              <p>PostgreSQL</p>
            </div>
            <div className="tech-tools tech-container">
              <h2 className="tech-header">Tools and More</h2>
              <p>Github</p>
              <p>Supabase</p>
              <p>Postman</p>
              <p>VSCode</p>
              <p>Heroku</p>
              <p>Netlify</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="tech-right">
            <div className="tech-testing-suites tech-container">
              <h2 className="tech-header">Testing Suites</h2>
              <p>Jest</p>
              <p>QUnit</p>
            </div>
            <div className="tech-practices tech-container">
              <h2 className="tech-header">Dev Practices</h2>
              <p>Pair/Mob Programming</p>
              <p>TDD</p>
              <p>REST API</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <img src={sparkle} />
    </div>
  );
}

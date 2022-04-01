import './Tech.css';

export default function Tech() {
  return (
    <div className="tech">
      <div className="tech-left">
        <div className="tech-left_languages">
          <h2>Languages</h2>
          <p>JavaScript</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </div>
        <div className="tech-left_environments">
          <h2>Frameworks, Libraries</h2>
          <p>React</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>Redux</p>
        </div>
      </div>
      <div className="tech-center">
        <div className="tech-center_databases">
          <h2>Database</h2>
          <p>PostgreSQL</p>
        </div>
        <div className="tech-center_practices">
          <h2>Dev Practices</h2>
          <p>Pair/Mob Programming</p>
          <p>TDD</p>
          <p>REST API</p>
        </div>
      </div>
      <div className="tech-right">
        <div className="tech-right_testing-suites">
          <h2>Testing Suites</h2>
          <p>Jest</p>
          <p>QUnit</p>
        </div>
        <div className="tech-right_tools">
          <h2>Tools and More</h2>
          <p>Github</p>
          <p>Supabase</p>
          <p>Postman</p>
          <p>VSCode</p>
          <p>Heroku</p>
          <p>Netlify</p>
        </div>
      </div>
    </div>
  );
}

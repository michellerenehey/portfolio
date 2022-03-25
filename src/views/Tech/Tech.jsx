import './Tech.css';

export default function Tech() {
  return (
    <div className="tech">
      <div className="tech-left">
        <div className="tech-left_languages">
          <h3>Languages</h3>
          <p>JavaScript</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </div>
        <div className="tech-left_environments">
          <h3>Frameworks, Libraries</h3>
          <p>React</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>Redux</p>
        </div>
        <div className="tech-left_databases">
          <h3>Database</h3>
          <p>PostgreSQL</p>
        </div>
      </div>
      <div className="tech-right">
        <div className="tech-right_testing-suites">
          <h3>Testing Suites</h3>
          <p>Jest</p>
          <p>QUnit</p>
        </div>
        <div className="tech-right_tools">
          <h3>Tools and More</h3>
          <p>Github</p>
          <p>Supabase</p>
          <p>Postman</p>
          <p>VSCode</p>
          <p>Heroku</p>
          <p>Netlify</p>
        </div>
        <div className="tech-right_practices">
          <h3>Dev Practices</h3>
          <p>Pair/Mob Programming</p>
          <p>TDD</p>
          <p>REST API</p>
        </div>
      </div>
    </div>
  );
}

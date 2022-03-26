import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-link">
        About
      </Link>
      <Link to="/tech" className="header-link">
        Tech Stack
      </Link>
      <div>projects</div>
      <div>resume</div>
    </div>
  );
}

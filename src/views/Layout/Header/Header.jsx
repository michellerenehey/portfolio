import './Header.css';
import resume from '../../../assets/nygrenresume.pdf';
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
      <Link to="/projects" className="header-link">
        Projects
      </Link>
      <Link to={resume} target="_blank" className="header-link">
        Resume
      </Link>
    </div>
  );
}

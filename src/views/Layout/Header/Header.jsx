import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">About</Link>
      <div>tech stack</div>
      <div>projects</div>
      <div>contact</div>
    </div>
  );
}

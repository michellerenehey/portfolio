import { useState } from 'react';
import './Header.css';
import resume from '../../../assets/Nygren_Resume_4.25.2022.pdf';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  const buttonClick = (e) => {
    setMenuToggle(!menuToggle);
  };
  return (
    <div className="header">
      <section className={menuToggle ? 'menuOpen' : 'menuClosed'}>
        <button onClick={buttonClick} />
        {menuToggle ? <Hamburger buttonClick={buttonClick} /> : null}
      </section>
      <section className="navLinks">
        <NavLink exact to="/" className="header-link">
          About
        </NavLink>
        <NavLink to="/tech" className="header-link">
          Tech Stack
        </NavLink>
        <NavLink to="/projects" className="header-link">
          Projects
        </NavLink>
        <NavLink to={resume} target="_blank" className="header-link">
          Resume
        </NavLink>
      </section>
    </div>
  );
}

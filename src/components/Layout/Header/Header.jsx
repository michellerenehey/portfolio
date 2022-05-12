import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Hamburger from './Hamburger';
import resume from '../../../assets/Nygren_Resume_4.27.2022.pdf';
import whiteHome from '../../../assets/home_white.png';
import blackHome from '../../../assets/home_black.png';

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [homeHover, setHomeHover] = useState(false);

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
        <NavLink
          exact
          to="/"
          className="header-home-link"
          onMouseOver={() => setHomeHover(true)}
          onMouseOut={() => setHomeHover(false)}
        >
          <img src={homeHover ? blackHome : whiteHome} alt="Home logo" />
        </NavLink>
        <NavLink to="/about" className="header-link">
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

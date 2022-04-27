import './Header.css';
import resume from '../../../assets/Nygren_Resume_4.25.2022.pdf';
import { Link } from 'react-router-dom';

import React from 'react';

export default function Hamburger({ buttonClick }) {
  return (
    <div className="hamburger">
      <ul>
        <li>
          <Link onClick={buttonClick} to="/">
            About
          </Link>
        </li>
        <li>
          <Link onClick={buttonClick} to="/tech">
            Tech Stack
          </Link>
        </li>
        <li>
          <Link onClick={buttonClick} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={buttonClick} to={resume} target="_blank">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

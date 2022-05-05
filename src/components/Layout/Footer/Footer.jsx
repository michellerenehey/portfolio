import { useState } from 'react';
import './Footer.css';
import whiteGit from '../../../assets/github_white.png';
import blackGit from '../../../assets/github_black.png';

export default function Footer() {
  const [gitHover, setGitHover] = useState(false);

  return (
    <div className="footer">
      <a
        href="https://github.com/michellerenehey"
        target="_blank"
        className="footer-link"
        onMouseOver={() => setGitHover(true)}
        onMouseOut={() => setGitHover(false)}
      >
        <img src={gitHover ? whiteGit : blackGit} />
      </a>
      <a
        href="https://www.linkedin.com/in/michellenygren/"
        target="_blank"
        className="footer-link"
      >
        Linkedin
      </a>
    </div>
  );
}

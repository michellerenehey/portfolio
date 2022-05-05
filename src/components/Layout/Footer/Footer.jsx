import { useState } from 'react';
import './Footer.css';
import whiteGit from '../../../assets/github_white.png';
import blackGit from '../../../assets/github_black.png';
import whiteLinkedIn from '../../../assets/linkedin_white.png';
import blackLinkedIn from '../../../assets/linkedin_black.png';

export default function Footer() {
  const [gitHover, setGitHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);

  return (
    <div className="footer">
      <a
        href="https://github.com/michellerenehey"
        target="_blank"
        className="footer-link"
        onMouseOver={() => setGitHover(true)}
        onMouseOut={() => setGitHover(false)}
      >
        <img src={gitHover ? whiteGit : blackGit} alt="Github logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/michellenygren/"
        target="_blank"
        className="footer-link"
        onMouseOver={() => setLinkedInHover(true)}
        onMouseOut={() => setLinkedInHover(false)}
      >
        <img
          src={linkedInHover ? whiteLinkedIn : blackLinkedIn}
          alt="LinkedIn logo"
        />
      </a>
    </div>
  );
}

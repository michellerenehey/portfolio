import { useState } from 'react';
import './Footer.css';
import whiteGit from '../../../assets/github_white.png';
import blackGit from '../../../assets/github_black.png';
import whiteLinkedIn from '../../../assets/linkedin_white.png';
import blackLinkedIn from '../../../assets/linkedin_black.png';
import whiteEmail from '../../../assets/email_white.png';
import blackEmail from '../../../assets/email_black.png';

export default function Footer() {
  const [gitHover, setGitHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

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
        target="_blank"
        className="footer-link"
        href="mailto:michelle.r.nygren@gmail.com?subject=Hi Michelle!"
        onMouseOver={() => setEmailHover(true)}
        onMouseOut={() => setEmailHover(false)}
      >
        <img src={emailHover ? whiteEmail : blackEmail} alt="Email logo" />
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

import { useState } from 'react';
import FadeIn from 'react-fade-in';
import './Home.css';
import image1 from '../../assets/handshake.gif';

export default function Home() {
  const [mHover, setMHover] = useState(false);
  const [iHover, setIHover] = useState(false);
  const [cHover, setCHover] = useState(false);
  const [hHover, setHHover] = useState(false);
  const [eHover, setEHover] = useState(false);
  const [lHover, setLHover] = useState(false);
  const [llHover, setLLHover] = useState(false);
  const [eeHover, setEEHover] = useState(false);
  const [nameHover, setNameHover] = useState(false);

  return (
    <div className="home">
      <FadeIn>
        <header className="home-name" aria-label="michelle-nygren">
          <span
            onMouseOver={() => setMHover(true)}
            onMouseOut={() => setMHover(false)}
            style={mHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            M
          </span>
          <span
            onMouseOver={() => setIHover(true)}
            onMouseOut={() => setIHover(false)}
            style={iHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            I
          </span>
          <span
            onMouseOver={() => setCHover(true)}
            onMouseOut={() => setCHover(false)}
            style={cHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            C
          </span>
          <span
            onMouseOver={() => setHHover(true)}
            onMouseOut={() => setHHover(false)}
            style={hHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            H
          </span>
          <span
            onMouseOver={() => setEHover(true)}
            onMouseOut={() => setEHover(false)}
            style={eHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            E
          </span>
          <span
            onMouseOver={() => setLHover(true)}
            onMouseOut={() => setLHover(false)}
            style={lHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            L
          </span>
          <span
            onMouseOver={() => setLLHover(true)}
            onMouseOut={() => setLLHover(false)}
            style={llHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            L
          </span>
          <span
            onMouseOver={() => setEEHover(true)}
            onMouseOut={() => setEEHover(false)}
            style={eeHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            E
          </span>
          <p
            onMouseOver={() => setNameHover(true)}
            onMouseOut={() => setNameHover(false)}
            style={nameHover ? { color: '#d0826f' } : { color: '#111010' }}
          >
            NYGREN
          </p>
        </header>
      </FadeIn>
      <FadeIn>
        <img
          src={image1}
          alt="A drawn image of two women shaking hands"
          className="home-image"
        />
      </FadeIn>
      <FadeIn>
        <div className="home-bio">
          <p>
            I am a hyper-focused <strong>full stack software engineer</strong>{' '}
            who is passionate about <strong>people</strong>. I create beautiful,
            accessible, empathetic web experiences that center on{' '}
            <strong>user experience</strong>, and embrace a{' '}
            <strong>growth mindset</strong> in all I do.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

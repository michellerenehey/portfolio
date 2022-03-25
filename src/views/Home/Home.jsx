import './Home.css';
import image from '../../header_white.gif';

export default function Home() {
  return (
    <div className="Home">
      <img
        src={image}
        alt="Michelle Nygren shaking hands"
        className="main-image"
      />
    </div>
  );
}

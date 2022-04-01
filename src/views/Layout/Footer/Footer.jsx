import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      {/* <a href="https://github.com/michellerenehey" target="_blank">
        github
      </a>
      <a href="https://www.linkedin.com/in/michellenygren/" target="_blank">
        linkedin
      </a>
      <div>email</div> */}
      <div className="strengths">
        <div className="strengths-item">
          <p className="strengths-item_word">CURIOUS</p>
        </div>
        <div className="strengths-item">
          <p className="strengths-item_word">EMPATHETIC</p>
        </div>
        <div className="strengths-item">
          <p className="strengths-item_word">ADAPTABLE</p>
        </div>
        <div className="strengths-item">
          <p className="strengths-item_word">DRIVEN</p>
        </div>
        <div className="strengths-item">
          <p className="strengths-item_word">KIND</p>
        </div>
      </div>
    </div>
  );
}

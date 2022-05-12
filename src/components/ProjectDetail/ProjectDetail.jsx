import './ProjectDetail.css';
import grid from '../../assets/grid.png';

export default function ProjectDetail({
  src,
  description,
  list1,
  list2,
  tech,
  site,
  code,
  gif,
}) {
  return (
    <div className="projectcontainer">
      <div
        className="projectdetail"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <a href={site || code} target="_blank" className="projectdetail-link">
          <img src={src} alt="project image" className="projectdetail-image" />
        </a>
        <p className="projectdetail-tech">{tech}</p>
        {gif && (
          <img src={gif} alt="gif of project" className="projectdetail-gif" />
        )}
        <p className="projectdetail-description">{description}</p>
        <ul>
          {list1 && <li className="projectdetail-list">{list1}</li>}
          <br />
          {list2 && <li className="projectdetail-list">{list2}</li>}
        </ul>
        <div className="projectdetail-links">
          {site && (
            <button>
              <a href={site} target="_blank" className="projectdetail-site">
                LIVE SITE
              </a>
            </button>
          )}
          <button>
            <a href={code} target="blank" className="projectdetail-site">
              CODE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

import './ProjectDetail.css';

export default function ProjectDetail({
  src,
  name,
  description,
  list1,
  list2,
  tech,
  site,
  code,
}) {
  return (
    <div className="projectdetail">
      <a href={site || code} target="_blank" className="projectdetail-link">
        <img src={src} alt="project image" className="projectdetail-image" />
      </a>
      <h2 className="projectdetail-name">{name}</h2>
      <p className="projectdetail-tech">{tech}</p>
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
  );
}

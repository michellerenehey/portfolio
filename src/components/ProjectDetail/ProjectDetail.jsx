import { Link } from 'react-router-dom';
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
      <div className="projectdetail-item">
        <Link to={site}>
          <img
            src={src}
            alt="project image"
            className="projectdetail-item_image"
          />
        </Link>
        <h2 className="projectdetail-item_name">{name}</h2>
        <p className="projectdetail-item_description">{description}</p>
        <p className="projectdetail-item_tech">{tech}</p>
        <ul className="projectdetail-item_list">
          <li>{list1}</li>
          <li>{list2}</li>
        </ul>
        <div className="projectdetail-item-links">
          <a href={site} className="projectdetail-item_site">
            link to deployed site
          </a>
          <a href={code} className="projectdetail-item_code">
            link to code
          </a>
        </div>
      </div>
    </div>
  );
}

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
      <Link to={site} target="_blank" className="projectdetail-item_image-link">
        <img
          src={src}
          alt="project image"
          className="projectdetail-item_image"
        />
      </Link>
      <h2 className="projectdetail-item_name">{name}</h2>
      <p className="projectdetail-item_tech">{tech}</p>
      <p className="projectdetail-item_description">{description}</p>
      <ul className="projectdetail-item_list_group">
        <li className="projectdetail-item_list">{list1}</li>
        <li className="projectdetail-item_list">{list2}</li>
      </ul>
      <div className="projectdetail-item_links">
        <a href={site} target="_blank" className="projectdetail-item_site">
          LIVE SITE
        </a>
        <a href={code} target="blank" className="projectdetail-item_site">
          CODE
        </a>
      </div>
    </div>
  );
}

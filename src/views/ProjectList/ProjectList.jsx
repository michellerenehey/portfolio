import './ProjectList.css';
import FadeIn from 'react-fade-in';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
import bear from '../../assets/self-care-bear.png';
import byob from '../../assets/byob.png';
import book from '../../assets/book.jpeg';
import geoTone from '../../assets/geo_tone.png';
import geoToneGif from '../../assets/geo_tone.gif';

export default function ProjectList() {
  return (
    <div className="projectlist">
      <FadeIn>
        <ProjectDetail
          src={geoTone}
          name="Geo Tone"
          description="Full-stack browser-based audio sequencer built using React, Reactronica (from Tone.js), CSS3, Framer Motion, PostgreSQL and Express. Geo Tone was built with an all-remote team on a 9-day sprint, and exists to make music fun! On the frontend, user data is hashed and encrypted; on the backend, data is managed in SQL."
          list1="Developed and maintained user story and led 4-person team as project manager."
          list2="Fully built out and implemented the back-end logic of the app, and spearheaded project design using CSS modules."
          tech="React, CSS, PostgreSQL, Express, Reactronica, Tone.js, Framer Motion"
          site="https://geo-tone.netlify.app/"
          code="https://github.com/geo-tone"
          gif={geoToneGif}
        />
      </FadeIn>
      <FadeIn>
        <ProjectDetail
          src={bear}
          name="Self Care Bear"
          description="A dynamically rendered CRUD app, utilizing a RESTful API to help users build and develop their ideal morning routine. Built with an all-remote team on a 4-day sprint."
          list1="Designed detailed wireframes for project layout, organizing components and mapping user flow, which served as a project management tool during development."
          list2="Substantially contributed to project collaboration with significant commits in project logic, utilizing React components and custom hooks."
          tech="React, Supabase, HTML, CSS"
          site="https://self-care-bears.netlify.app/"
          code="https://github.com/self-care-bear/self-care-bear"
        />
      </FadeIn>
      <FadeIn>
        <ProjectDetail
          src={byob}
          name="BYOB"
          description="A dynamically rendered single-page app, utilizing Supabase storage and CRUD functionality to encourage community-building and observation in the bee-loving community. Built with an all-remote team on a 4-day sprint."
          list1="Spearheaded component management, utilizing Miro as a team resource to stay on track during development."
          list2="Took lead on database design, utilizing foreign-key relationships to connect database storage."
          tech="React, Supabase, Netlify, CSS"
          site="https://byobee.netlify.app/"
          code="https://github.com/BYOBee-Project/BYOBee"
        />
      </FadeIn>
      <FadeIn>
        <ProjectDetail
          src={book}
          name="Backend Bookstore"
          description="A fictional bookstore API, built from scratch using exclusively postgreSQL. The project utilized TDD, and was formed vertically with a 4-person team on a 2-day sprint."
          tech="Express, PostgreSQL, Node"
          code="https://github.com/michellerenehey/backend-bookstore"
        />
      </FadeIn>
    </div>
  );
}

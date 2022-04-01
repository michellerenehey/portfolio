import './ProjectList.css';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
import bear from '../../assets/self-care-bear.png';
import byob from '../../assets/byob.png';

export default function ProjectList() {
  return (
    <div className="projectlist">
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
    </div>
  );
}

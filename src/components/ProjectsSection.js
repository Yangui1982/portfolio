import React, { useEffect, useState } from 'react';
import Project from './Project';
import projectsData from '../assets/projects.json';

import castleBnBLogo from '../assets/projectsIcons/castle.png'
import devisLibLogo from '../assets/projectsIcons/devislib-logo.png';
import kiAikidoLogo from '../assets/projectsIcons/kiAikidoLogo.png';
import hFLogo from '../assets/projectsIcons/HFLogo.png';
import MSyndicLogo from "../assets/projectsIcons/MSyndicLogo.png";
import bouletmatonLogo from '../assets/bouletmaton.png';

import reactLogo from '../assets/skillsIcons/reactLogo.png';
import stimulusLogo from '../assets/skillsIcons/stimulus-seeklogo.svg';
import bootstrapLogo from '../assets/skillsIcons/bootstrap-seeklogo.svg';
import rubyLogo from '../assets/skillsIcons/ruby-seeklogo.svg';
import railsLogo from '../assets/skillsIcons/rails-seeklogo.svg';
import postgresqlLogo from '../assets/skillsIcons/postgresql-seeklogo.svg';
import apiLogo from '../assets/skillsIcons/api.png';
import jsLogo from '../assets/skillsIcons/jsLogo.png';
import seoLogo from '../assets/skillsIcons/seoLogo.png';
import rrLogo from '../assets/skillsIcons/responsively.png';
import herokuLogo from '../assets/skillsIcons/heroku-seeklogo.svg';

const logoMap = {
  "castle.png": castleBnBLogo,
  "devislib-logo.png": devisLibLogo,
  "kiAikidoLogo.png": kiAikidoLogo,
  "HFLogo.png": hFLogo,
  "MSyndicLogo.png": MSyndicLogo,
  "bouletmaton.png": bouletmatonLogo,
  "reactLogo.png": reactLogo,
  "ruby-seeklogo.svg": rubyLogo,
  "rails-seeklogo.svg": railsLogo,
  "postgresql-seeklogo.svg": postgresqlLogo,
  "api.png": apiLogo,
  "bootstrap-seeklogo.svg": bootstrapLogo,
  "stimulus-seeklogo.svg": stimulusLogo,
  "heroku-seeklogo.svg": herokuLogo,
  "seoLogo.png": seoLogo,
  "responsively.png": rrLogo,
  "jsLogo.png": jsLogo
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const projectsWithLogos = projectsData.map(project => ({
      ...project,
      logo: logoMap[project.logo],
      skills: project.skills.map(skill => ({
        ...skill,
        logo: logoMap[skill.logo]
      }))
    }));
    setProjects(projectsWithLogos);
  }, []);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedOption((prevSelectedOption) => (prevSelectedOption === value ? null : value));
  };

  const handleClick = () => {
    setSelectedOption(null);
  };

  return (
    <div className='projets' id='secprojets'>
      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Quelques Réalisations</h2>
        <div className="separationbar" />
      </div>
      <div className='myProjectsContainer'>
        {projects.map((project, index) => (
          <Project
            key={index}
            logo={project.logo}
            title={project.title}
            status={project.status}
            description={project.description}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            skills={project.skills}
            value={`option${index + 1}`}
            selectedOption={selectedOption}
            handleRadioChange={handleRadioChange}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

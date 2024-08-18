import React from 'react';
import Skill from './Skill';

import reactLogo from '../assets/skillsIcons/reactLogo.png';
import stimulusLogo from '../assets/skillsIcons/stimulus-seeklogo.svg';
import sassLogo from '../assets/skillsIcons/sass-seeklogo.svg';
import bootstrapLogo from '../assets/skillsIcons/bootstrap-seeklogo.svg';
import rubyLogo from '../assets/skillsIcons/ruby-seeklogo.svg';
import railsLogo from '../assets/skillsIcons/rails-seeklogo.svg';
import sqliteLogo from '../assets/skillsIcons/sqlite-seeklogo.svg';
import postgresqlLogo from '../assets/skillsIcons/postgresql-seeklogo.svg';
import redisLogo from '../assets/skillsIcons/redis-seeklogo.svg';
import apiLogo from '../assets/skillsIcons/api.png';
import jsLogo from '../assets/skillsIcons/jsLogo.png';
import seoLogo from '../assets/skillsIcons/seoLogo.png';
import vueLogo from '../assets/skillsIcons/vue-js-seeklogo.svg';
import gitLogo from '../assets/skillsIcons/gitLogo.png';
import figmaLogo from '../assets/skillsIcons/figma-seeklogo.svg';
import rrLogo from '../assets/skillsIcons/responsively.png';
import herokuLogo from '../assets/skillsIcons/heroku-seeklogo.svg';

const SkillsSection = () => (
  <div className='skills' id='secskills'>
    <div className="separationEnsemble">
      <div className="separationbar" />
      <h2>Compétences</h2>
      <div className="separationbar" />
    </div>
    <div className='skillsContainer'>
      <div className='individualCompetenceBlock'>
        <h3 className='skillsTitle'>Front End</h3>
        <div className='skillsIndividual'>
          <Skill logo={reactLogo} title="React.JS" />
          <Skill logo={stimulusLogo} title="Stimulus" />
          <Skill logo={sassLogo} title="Sass" />
          <Skill logo={bootstrapLogo} title="Bootstrap" />
        </div>
      </div>
      <div className='linev'></div>
      <div className='individualCompetenceBlock'>
        <h3 className='skillsTitle'>Back End</h3>
        <div className='skillsIndividual'>
          <Skill logo={rubyLogo} title="Ruby" />
          <Skill logo={railsLogo} title="Rails" />
          <Skill logo={apiLogo} title="API" />
          <Skill logo={sqliteLogo} title="SQLite" />
          <Skill logo={postgresqlLogo} title="PostgeSQL" />
          <Skill logo={redisLogo} title="Redis" />
        </div>
      </div>
      <div className='linev'></div>
      <div className='individualCompetenceBlock'>
        <h3 className='skillsTitle'>Technos travaillées</h3>
        <div className='skillsIndividual'>
          <Skill logo={jsLogo} title="JavaScript" />
          <Skill logo={vueLogo} title="VueJS" />
          <Skill logo={seoLogo} title="SEO" />
        </div>
      </div>
      <div className='linev'></div>
      <div className='individualCompetenceBlock'>
        <h3 className='skillsTitle'>Outils utilisés</h3>
        <div className='skillsIndividual'>
          <Skill logo={gitLogo} title="Git" />
          <Skill logo={figmaLogo} title="Figma" />
          <Skill logo={rrLogo} title="Responsively App" />
          <Skill logo={herokuLogo} title="Heroku" />
        </div>
      </div>
    </div>
  </div>
);

export default SkillsSection;

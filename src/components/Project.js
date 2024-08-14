import React from 'react';

const Project = ({ logo, title, status, description, githubLink, projectLink, skills, value, selectedOption, handleRadioChange, handleClick }) => (
  <div className='individualProjectContainer'>
    <label>
      <input
        type='radio'
        name='choix'
        value={value}
        checked={selectedOption === value}
        onChange={handleRadioChange}
        onClick={handleClick}
      />
      <div className='flip-card'>
        <div className='front'>
          <div className='projectPicture'>
            <img className='projectPicture' alt={title} title={title} loading="lazy" width="300" height="300" decoding="async" data-nimg="1" srcSet={logo} />
          </div>
          <div className='projectTitle'>
            <h3>{title}</h3>
            <p>{status}</p>
          </div>
          <div className='projectSkills'>
            {skills.map((skill, index) => (
              <img key={index} alt={skill.title} title={skill.title} loading="lazy" width="24" height="24" decoding="async" data-nimg="1" srcSet={skill.logo} />
            ))}
          </div>
        </div>
        <div className='back'>
          <div className='aboutProject'>
            <h2>{title}</h2>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className='boutons'>
            {githubLink ? (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <div className='bouton'>
                  <p>Voir le Github</p>
                </div>
              </a>
            ) : (
              <div className='bouton b'>
                <p>Github Privé</p>
              </div>
            )}
            {projectLink && (
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <div className='bouton'>
                  <p>Voir le Projet</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </label>
  </div>
);

export default Project;

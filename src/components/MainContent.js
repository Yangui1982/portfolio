import React from 'react';
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import '../styles/MainContent.scss';
import profilePicture from '../assets/profile.jpg';

const MainContent = () => {
  return (
    <main>
      <div className='accueil'>
        <div className='pitch'>
          <h1>Jean-Guillaume
              Vicente</h1>
          <h2>Développeur Web Full Stack</h2>
          <p>
            Développeur web passionné par les nouvelles technologies,
            autonome, motivé et adaptable, je mets à votre service toutes mes compétences.
          </p>
          <p>
            J'ai une forte appétence, notamment pour le clean code, les structures de bases de données relationnelles,
            l'optimisation et enfin l'expérience utilisateur UX.
          </p>
          <div className='icon'>
            <a href='https://www.linkedin.com/in/jean-guillaume-vicente-4a2730a2/'><i className="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/Yangui1982'><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div className='line'></div>
        <img alt="profile" title="profile" fetchpriority="high" width="500" height="500" decoding="async" data-nimg="1" className="profilePicture" srcSet={profilePicture}></img>
      </div>

      <SkillsSection />
      <ProjectsSection />

      <div className="contactg">
        <div className="separationEnsemble">
          <div className="separationbar" />
          <h2>Contact</h2>
          <div className="separationbar" />
        </div>
        <br />
        <br />
        <br />
        <div className='contact' id='seccontact'>
          <div className='pitch c'>
            <h1>Jean-Guillaume Vicente</h1>
            <h2>Développeur Web Full Stack</h2>
            <h3>Comment me contacter?</h3>
            <p>jeangui.vicente@gmail.com</p>
            <a href='https://www.linkedin.com/in/jean-guillaume-vicente-4a2730a2/' target="_blank" rel="noopener noreferrer">linkedin</a>
            <h3>06 58 01 27 59</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

import React from 'react';
import profilePicture from '../assets/profile.jpg';

const PresentationSection = () => {
  return (
    <div className='accueil'>
      <div className='pitchArea'>
        <div className='pitch'>
          <h1>Jean-Guillaume Vicente</h1>
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
      </div>
      <div className='line'></div>
      <img alt="profile" title="profile" fetchpriority="high" width="500" height="500" decoding="async" data-nimg="1" className="profilePicture" srcSet={profilePicture}></img>
    </div>
  );
};

export default PresentationSection;

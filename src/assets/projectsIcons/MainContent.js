import React, { useState } from 'react';
import '../styles/MainContent.scss';
import profilePicture from '../assets/profile.jpg';
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
import castleBnBLogo from '../assets/projectsIcons/castle.png'
import devisLibLogo from '../assets/projectsIcons/devislib-logo.png';
import kiAikidoLogo from '../assets/projectsIcons/kiAikidoLogo.png';
import hFLogo from '../assets/projectsIcons/HFLogo.png';
import bouletmatonLogo from '../assets/bouletmaton.png';



const MainContent = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    const value = event.target.value;

    if (selectedOption === value) {
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
    }
  };

  const handleClick = () => {
    setSelectedOption(null);
  };
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
            J'ai une forte appétence pour le clean code, les structures de bases de données relationnelles,
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
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="React.js" title="React.js" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='reactLogo' srcSet={reactLogo}/>
                </div>
                <h4>React.JS</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Stimulus" title="Stimulus" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='stimulus' srcSet={stimulusLogo}/>
                </div>
                <h4>Stimulus</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Sass" title="Sass" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='sass' srcSet={sassLogo}/>
                </div>
                <h4>Sass</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Bootstrap" title="Bootstrap" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='sass' srcSet={bootstrapLogo}/>
                </div>
                <h4>Bootstrap</h4>
              </div>
            </div>
          </div>
          <div className='linev'></div>
          <div className='individualCompetenceBlock'>
            <h3 className='skillsTitle'>Back End</h3>
            <div className='skillsIndividual'>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Ruby" title="Ruby" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='rubyLogo' srcSet={rubyLogo}/>
                </div>
                <h4>Ruby</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Rails" title="Rails" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='railsLogo' srcSet={railsLogo}/>
                </div>
                <h4>Rails</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="API" title="API" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='apiLogo' srcSet={apiLogo}/>
                </div>
                <h4>API</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="SQLite" title="SQLite" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='sqliteLogo' srcSet={sqliteLogo}/>
                </div>
                <h4>SQLite</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="PostgreSQL" title="PosgreSQL" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='posgresqlLogo' srcSet={postgresqlLogo}/>
                </div>
                <h4>PostgeSQL</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Redis" title="Redis" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='redisLogo' srcSet={redisLogo}/>
                </div>
                <h4>Redis</h4>
              </div>
            </div>
          </div>
          <div className='linev'></div>
          <div className='individualCompetenceBlock'>
            <h3 className='skillsTitle'>Technos travaillées</h3>
            <div className='skillsIndividual'>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="JS" title="JS" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='jsLogo' srcSet={jsLogo}/>
                </div>
                <h4>JavaScrip</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="VueJS" title="VueJS" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='vuejsLogo' srcSet={vueLogo}/>
                </div>
                <h4>VueJS</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="SEO" title="SEO" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='seoLogo' srcSet={seoLogo}/>
                </div>
                <h4>SEO</h4>
              </div>
            </div>
          </div>
          <div className='linev'></div>
          <div className='individualCompetenceBlock'>
            <h3 className='skillsTitle'>Outils utilisés</h3>
            <div className='skillsIndividual'>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Git" title="Git" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='gitLogo' srcSet={gitLogo}/>
                </div>
                <h4>Git</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Figma" title="Figma" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='figmaLogo' srcSet={figmaLogo}/>
                </div>
                <h4>Figma</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Responsively" title="Responsively" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='rrLogo' srcSet={rrLogo}/>
                </div>
                <h4>Responsively App</h4>
              </div>
              <div className='skill'>
                <div className='skillLogo'>
                  <img alt="Heroku" title="Heroku" loading="lazy" width="58" height="58" decoding="async" data-nimg="1" className='herokuLogo' srcSet={herokuLogo}/>
                </div>
                <h4>Heroku</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='projets' id='secprojets'>
        <div className="separationEnsemble">
          <div className="separationbar" />
          <h2>Quelques Réalisations</h2>
          <div className="separationbar" />
        </div>
        <div className='myProjectsContainer'>
          <div className='individualProjectContainer'>
          <label>
            <input type='radio'name='choix' value='option1' checked={selectedOption === 'option1'} onChange={handleRadioChange} onClick={handleClick}/>
            <div className='flip-card'>
              <div className='front'>
                <div className='projectPicture'>
                  <img alt='CastleBnB' title='CastleBnB' loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className='sass' classe='castleBnBLogo' srcSet={castleBnBLogo}/>
                </div>
                <div className='projectTitle'>
                  <h3>CastleBnB</h3>
                  <p>(Projet de formation)</p>
                </div>
                <div className='projectSkills'>
                  <img alt="Ruby" title="Ruby" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='rubyLogo' srcSet={rubyLogo}/>
                  <img alt="Rails" title="Rails" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='railsLogo' srcSet={railsLogo}/>
                  <img alt="PostgreSQL" title="PosgreSQL" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='posgresqlLogo' srcSet={postgresqlLogo}/>
                  <img alt="Bootstrap" title="Bootstrap" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='sass' srcSet={bootstrapLogo}/>
                  <img alt="Stimulus" title="Stimulus" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='stimulus' srcSet={stimulusLogo}/>
                  <img alt="Heroku" title="Heroku" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='herokuLogo' srcSet={herokuLogo}/>
                </div>
              </div>
              <div className='back'>
                <div className='aboutProject'>
                  <h2>CastleBnB</h2>
                  <p>Projet de formation au Wagon, clone d'AirBnB sur le thème des châteaux de la Loire :</p>
                  <p>-Création d'une API REST pour les châteaux</p>
                  <p>-Implémentation des commentaires par château</p>
                  <p>-Implémentation des réservations</p>
                </div>
                <a href='https://github.com/Yangui1982/castlebnb' target="_blank" rel="noopener noreferrer">
                  <div className='bouton'>
                    <p>Voir le Github</p>
                  </div>
                </a>
              </div>
            </div>
          </label>
          </div>
          <div className='individualProjectContainer'>
          <label>
            <input type='radio'name='choix' value='option2' checked={selectedOption === 'option2'} onChange={handleRadioChange} onClick={handleClick}/>
            <div className='flip-card'>
              <div className='front'>
                <div className='projectPicture'>
                  <img alt='DevisLib' title='DevisLib' loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className='sass pngLogo' srcSet={devisLibLogo}/>
                </div>
                <div className='projectTitle'>
                  <h3>DevisLib</h3>
                  <p>(Projet de formation)</p>
                </div>
                <div className='projectSkills'>
                  <img alt="Ruby" title="Ruby" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='rubyLogo' srcSet={rubyLogo}/>
                  <img alt="Rails" title="Rails" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='railsLogo' srcSet={railsLogo}/>
                  <img alt="API" title="API" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='apiLogo' srcSet={apiLogo}/>
                  <img alt="PostgreSQL" title="PosgreSQL" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='posgresqlLogo' srcSet={postgresqlLogo}/>
                  <img alt="Bootstrap" title="Bootstrap" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='sass' srcSet={bootstrapLogo}/>
                  <img alt="Heroku" title="Heroku" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='herokuLogo' srcSet={herokuLogo}/>
                </div>
              </div>
              <div className='back'>
                <div className='aboutProject'>
                  <h2>DevisLib</h2>
                  <p>Projet de formation au Wagon, une application, pour les artisans, permettant de créer directement un devis à partir d'un formulaire
                    et d'une base de données de produits. Le devis créé est édité en pdf et peut être directement envoyé par mail aux clients grace à l'application.</p>
                </div>
                <div className='bouton b'>
                  <p>Github privé</p>
                </div>
              </div>
            </div>
          </label>
          </div>
          <div className='individualProjectContainer'>
          <label>
            <input type='radio' name='choix' value='option3' checked={selectedOption === 'option3'} onChange={handleRadioChange} onClick={handleClick}/>
            <div className='flip-card'>
              <div className='front'>
                <div className='projectPicture'>
                  <img alt='Ki Aïkido Castelnaudary' title='Ki Aïkido Castelnaudary' loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className='sass png pngLogo' classe='kiAikido' srcSet={kiAikidoLogo}/>
                </div>
                <div className='projectTitle'>
                  <h3>Ki Aïkido Castelnaudary</h3>
                  <p>(Projet Freelance)</p>
                </div>
                <div className='projectSkills'>
                  <img alt="Ruby" title="Ruby" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='rubyLogo' srcSet={rubyLogo}/>
                  <img alt="Rails" title="Rails" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='railsLogo' srcSet={railsLogo}/>
                  <img alt="PostgreSQL" title="PosgreSQL" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='posgresqlLogo' srcSet={postgresqlLogo}/>
                  <img alt="Bootstrap" title="Bootstrap" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='sass' srcSet={bootstrapLogo}/>
                  <img alt="Responsively" title="Responsively" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='rrLogo' srcSet={rrLogo}/>
                  <img alt="SEO" title="SEO" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='seoLogo' srcSet={seoLogo}/>
                  <img alt="Heroku" title="Heroku" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='herokuLogo' srcSet={herokuLogo}/>
                </div>
              </div>
              <div className='back'>
                <div className='aboutProject site'>
                  <h2>Ki Aïkido Castelnaudary</h2>
                  <p>Application web pour une association de Ki Aïkido disposant d'un back office (Rich Text) pour l'implémentation des 'news' du club. </p>
                  <p>-Login uniquement pour le client (gem Devise)</p>
                  <p>-Sécurité des pages non accessible au public (gem Pundit)</p>
                </div>
                <a href='https://github.com/Yangui1982/ki_aikido_castelnaudary' target="_blank" rel="noopener noreferrer">
                  <div className='bouton'>
                    <p>Voir le Github</p>
                  </div>
                </a>
                <a href='https://www.ki-aikido-castelnaudary.com' target="_blank" rel="noopener noreferrer">
                  <div className='bouton'>
                    <p>Voir le Projet</p>
                  </div>
                </a>
              </div>
            </div>
          </label>
          </div>
          <div className='individualProjectContainer'>
          <label>
            <input type='radio' name='choix' value='option4' checked={selectedOption === 'option4'} onChange={handleRadioChange} onClick={handleClick}/>
            <div className='flip-card'>
              <div className='front'>
                <div className='projectPicture'>
                  <img alt='Hment fier' title='Hment fier' loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className='sass png pngLogo' classe='hFLogo' srcSet={hFLogo}/>
                </div>
                <div className='projectTitle'>
                  <h3>Hment fier 2023</h3>
                  <p>(Projet Freelance)</p>
                </div>
                <div className='projectSkills'>
                  <img alt="JS" title="JS" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='jsLogo' srcSet={jsLogo}/>
                  <img alt="Bootstrap" title="Bootstrap" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='sass' srcSet={bootstrapLogo}/>
                  <img alt="Responsively" title="Responsively" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='rrLogo' srcSet={rrLogo}/>
                  <img alt="SEO" title="SEO" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='seoLogo' srcSet={seoLogo}/>
                </div>
              </div>
              <div className='back'>
                <div className='aboutProject site'>
                  <h2>H'ment Fier</h2>
                  <p>Site statique pour une opération de communication de l'A.R.S. PACA concernant différents projets, pensés et mis en place, dans des services hospitaliers des départements de la région. </p>
                </div>
                <div className='bouton b'>
                  <p>Github privé</p>
                </div>
                <a href='https://www.hment-fiers.fr' target="_blank" rel="noopener noreferrer">
                  <div className='bouton'>
                    <p>Voir le Projet</p>
                  </div>
                </a>
              </div>
            </div>
          </label>
          </div>
          <div className='individualProjectContainer'>
          <label>
            <input type='radio' name='choix' value='option5' checked={selectedOption === 'option5'} onChange={handleRadioChange} onClick={handleClick}/>
            <div className='flip-card'>
              <div className='front'>
                <div className='projectPicture'>
                  <img alt='Jean-Guillaume Vicente' title='Jean-Guillaume Vicente' loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className='sass' classe='bouletmatonLogo' srcSet={bouletmatonLogo}/>
                </div>
                <div className='projectTitle'>
                  <h3>Jgvicente.xyz</h3>
                  <p>(Ce portfolio!)</p>
                </div>
                <div className='projectSkills'>
                  <img alt="React.js" title="React.js" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='reactLogo' srcSet={reactLogo}/>
                  <img alt="JS" title="JS" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='jsLogo' srcSet={jsLogo}/>
                  <img alt="Responsively" title="Responsively" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='rrLogo' srcSet={rrLogo}/>
                  <img alt="SEO" title="SEO" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className='seoLogo' srcSet={seoLogo}/>
                </div>
              </div>
              <div className='back'>
                <div className='aboutProject site'>
                  <h2>Jgvicente.xyz</h2>
                  <p>Le portfolio sur lequel vous naviguez actuellement.</p>
                </div>
                <div className='bouton'>
                  <p>Voir le Github</p>
                </div>
              </div>
            </div>
          </label>
          </div>
        </div>
        <div className="separationEnsemble">
          <div className="separationbar" />
          <h2>Contact</h2>
          <div className="separationbar" />
        </div>
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

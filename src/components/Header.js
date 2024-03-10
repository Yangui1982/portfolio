import React, { useState, useEffect } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import '../styles/Header.scss';
import bouletmatonLogo from '../assets/bouletmaton.png';

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleDownloadCV = () => {
    const cvUrl = process.env.PUBLIC_URL + '/CV JGV.pdf';
    window.open(cvUrl, '_blank');
    closeMenu();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const body = document.body;
    const buttons = document.querySelectorAll('button');
    const menu = document.getElementById('buttons');
    const open = document.querySelector('.menu-open');
    const main = document.querySelector('main');
    const logo = document.getElementById('logo-navbar');
    const divs = document.querySelectorAll('.pitch');
    const skills = document.querySelectorAll('.individualCompetenceBlock')
    const skillLogos = document.querySelectorAll('.skillLogo')
    const projects = document.querySelectorAll('.individualProjectContainer')

    if (isChecked) {
      body.classList.add('light-theme');
      buttons.forEach(button => button.classList.add('light-theme'));
      divs.forEach(div => {
        div.classList.add('light-theme');
      });
      skills.forEach(skill => {
        skill.classList.add('light-theme');
      });
      skillLogos.forEach(skillLogo => {
        skillLogo.classList.add('light-theme');
      });
      projects.forEach(project => {
        project.classList.add('light-theme');
      });
      if (main) {
        main.classList.add('light-theme');
      }
      if (logo) {
        logo.classList.add('light-theme');
      }
      if (menu) {
        menu.classList.add('light-theme');
      }

    } else {
      body.classList.remove('light-theme');
      buttons.forEach(button => button.classList.remove('light-theme'));
      divs.forEach(div => {
        div.classList.remove('light-theme');
      });
      skills.forEach(skill => {
        skill.classList.remove('light-theme');
      });
      skillLogos.forEach(skillLogo => {
        skillLogo.classList.remove('light-theme');
      });
      projects.forEach(project => {
        project.classList.remove('light-theme');
      });
      if (main) {
        main.classList.remove('light-theme');
      }
      if (logo) {
        logo.classList.remove('light-theme');
      }
      if (menu) {
        menu.classList.remove('light-theme');
      }
      if (open) {
        open.classList.add('light-theme');
      }
    }
  }, [isChecked]);

  return (
    <header id='navbar'>
      <div className='nav'>
        <div className='logo' id='logo-navbar'>
          <img src={bouletmatonLogo} id='logo' alt="logo" />
        </div>
        <div className='test'>
          <div className={`buttons ${menuOpen ? 'menu-open' : 'menu-closed'} ${isChecked ? 'light-theme' : ''}`}>
            <button id='accueil' onClick={closeMenu}>
              <h3>Accueil</h3>
            </button>
            <button id='skills' onClick={closeMenu}>
              <h3>Compétences</h3>
            </button>
            <button id='projets' onClick={closeMenu}>
              <h3>Portfolio</h3>
            </button>
            <button id='contact' onClick={closeMenu}>
              <h3>Contact</h3>
            </button>
            <div className='cv' onClick={handleDownloadCV}>
              <h4>C.V.</h4><i className="fa-solid fa-download"></i>
            </div>
          </div>
          <div className='choix'>
            <input
              className='theme'
              type='checkbox'
              id='themeCheckbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="themeCheckbox">
              {isChecked ? (
                <FontAwesomeIcon icon={faMoon} className="fa-regular" />
              ) : (
                <FontAwesomeIcon icon={faSun} className="fa-regular" />
              )}
            </label>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'menu-open' : 'menu-closed'}`}></div>
            <div className={`bar ${menuOpen ? 'menu-open' : 'menu-closed'}`}></div>
            <div className={`bar ${menuOpen ? 'menu-open' : 'menu-closed'}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

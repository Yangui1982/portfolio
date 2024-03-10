import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  useEffect(() => {
    const scrollToElement = (element) => {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const topOffset = element.offsetTop - navbarHeight;
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: topOffset
      });
    };

    const getAnchor = () => {
      return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
    };

    const handleClick = (sectionId) => {
      const element = document.getElementById(sectionId);
      scrollToElement(element);
    };

    document.getElementById("logo-navbar").addEventListener('click', () => {
      handleClick("secaccueil");
    });

    document.getElementById("accueil").addEventListener('click', () => {
      handleClick("secaccueil");
    });

    document.getElementById("skills").addEventListener('click', () => {
      handleClick("secskills");
    });

    document.getElementById("projets").addEventListener('click', () => {
      handleClick("secprojets");
    });

    document.getElementById("contact").addEventListener('click', () => {
      handleClick("seccontact");
    });

    const anchor = getAnchor();
    if (anchor) {
      const element = document.getElementById(anchor);
      scrollToElement(element);
    }

    return () => {
      document.getElementById("accueil").removeEventListener('click', () => handleClick("secaccueil"));
      document.getElementById("skills").removeEventListener('click', () => handleClick("secskills"));
      document.getElementById("projets").removeEventListener('click', () => handleClick("secprojets"));
    };
  }, []);
  return (
    <div className="app">
      <Header menuOpen={menuOpen} toggleMenu={handleToggleMenu} closeMenu={closeMenu}/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

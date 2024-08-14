import React from 'react';
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import PresentationSection from "./PresentationSection";
import ContactSection from "./ContactSection";
import '../styles/MainContent.scss';

const MainContent = () => {
  return (
    <main>
      <PresentationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default MainContent;

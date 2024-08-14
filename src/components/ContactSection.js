import React from 'react';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;

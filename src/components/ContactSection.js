import React from 'react';
import '../styles/Contact.scss';

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
        <div className='pitchArea'>
          <div className='pitch c'>
            <h1>Jean-Guillaume Vicente</h1>
            <h2>Développeur Web Full Stack</h2>
            <h3 className='mh'>Comment me contacter?</h3>
            <h3 className='mh'><i class="fa-solid fa-envelope m"></i>   jeangui.vicente@gmail.com</h3>
            <h3 className='mh ml'><a href='https://www.linkedin.com/in/jean-guillaume-vicente-4a2730a2/' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin m"></i>   Linkedin</a></h3>
            <h3 className='mh'><i class="fa-solid fa-phone m"></i>   06.58.01.27.59</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

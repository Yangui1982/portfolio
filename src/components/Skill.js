import React from 'react';

const Skill = ({ logo, title }) => (
  <div className='skill'>
    <div className='skillLogo'>
      <img alt={title} title={title} loading="lazy" width="58" height="58" decoding="async" data-nimg="1" srcSet={logo}/>
    </div>
    <h4>{title}</h4>
  </div>
);

export default Skill;

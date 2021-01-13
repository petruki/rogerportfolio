import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillSamples from './skills-references';
import Slider from 'react-slick';

const Skills = ({ skills }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedSkill, setSelectedSkill] = React.useState(undefined);
  const [skillGroups, setSkillGroup] = React.useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  function openModal(skill) {
    setSelectedSkill(skill);
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  }

  useState(() => {
    var i, j, chunk = 6;
    let skillGroup = [];
    for (i = 0, j = skills.length; i < j; i += chunk) {
      skillGroup.push(skills.slice(i, i + chunk));
    }

    setSkillGroup(skillGroup);
  });

  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <Slider {...sliderSettings}>
            {skillGroups.map((sks, index) => (
              <div key={index} style={{ display: 'grid' }}>
                <div className="skills-grid">
                  {sks.map((skill, id) => (
                    <div className="skill select" key={id}>
                      <img src={skill.img} alt="css"></img>
                      <p>{skill.para}</p>
                      {skill.references && skill.references.length > 0 &&
                        <a onClick={() => openModal(skill)} className="btn">[+] References</a>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {selectedSkill &&
        <SkillSamples 
          img={selectedSkill.img}
          references={selectedSkill.references}
          closeModal={closeModal} 
          modalIsOpen={modalIsOpen} />}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;

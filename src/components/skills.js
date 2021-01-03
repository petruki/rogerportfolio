import React from 'react';
import PropTypes from 'prop-types';
import SkillSamples from './skills-references';

const Skills = ({ skills }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedSkill, setSelectedSkill] = React.useState(undefined);

  function openModal(skill) {
    setSelectedSkill(skill);
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  }
  
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skills.map((skill, id) => (
              <div className="skill select" key={id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
                {skill.references && skill.references.length &&
                  <a onClick={() => openModal(skill)} className="btn">[+] References</a>}
              </div>
            ))}
          </div>
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
